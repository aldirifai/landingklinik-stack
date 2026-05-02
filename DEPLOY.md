# Deploy ke VPS — Docker (5 apps) + Nginx native + Certbot native

Deploy 5 website (portfolio + 4 demo) di satu VPS dengan pemisahan tugas yang jelas:

- **Docker Compose** → jalankan 5 Next.js standalone container, masing-masing bind ke `127.0.0.1:470xx` di host (range quiet, tidak bentrok dengan port umum 3000s/8000s)
- **Nginx native** (di host, bukan container) → reverse proxy, terminate TLS, serve ke internet
- **Certbot native** (di host) → issue & auto-renew Let's Encrypt cert per domain

## Arsitektur

```
                          ┌──────────────────────────────────────┐
   Internet ──:80/:443──▶ │ Nginx native (host)                  │
                          │   - server block per domain          │
                          │   - SSL cert dari certbot --nginx    │
                          └──────────┬───────────────────────────┘
                                     │ proxy_pass http://127.0.0.1:30xx
        ┌──────────────┬─────────────┼─────────────┬──────────────┐
        ▼              ▼             ▼             ▼              ▼
  127.0.0.1:47050 127.0.0.1:47051 127.0.0.1:47052 127.0.0.1:47053 127.0.0.1:47054
   landingklinik   demo-general   demo-aesthetic  demo-pediatric  demo-dashboard
                          (semua container Docker — bind localhost saja)
```

> **Kenapa port 47050-47054?** Range ini quiet — tidak dipakai service standar manapun, jauh dari range web/dev umum (3000s, 5000s, 8000s, 9000s) supaya tidak bentrok dengan app lain di VPS-mu. Semua di bawah ephemeral range Linux (32768+) tapi 47000s sangat jarang ke-assign. Kalau ternyata masih bentrok, ganti angka — yang penting same-number di `docker-compose.yml` dan 5 file `nginx-examples/*`.

| Container | Host port | Domain |
|---|---|---|
| `landingklinik` | `127.0.0.1:47050` | `landingklinik.id` (+ `www` redirect) |
| `demo-general` | `127.0.0.1:47051` | `demo-general.landingklinik.id` |
| `demo-aesthetic` | `127.0.0.1:47052` | `demo-aesthetic.landingklinik.id` |
| `demo-pediatric` | `127.0.0.1:47053` | `demo-pediatric.landingklinik.id` |
| `demo-dashboard` | `127.0.0.1:47054` | `demo-dashboard.landingklinik.id` |

Container bind ke `127.0.0.1` (loopback), bukan `0.0.0.0`. Hanya proses di host yang bisa connect → aman, tidak ada bypass nginx.

---

## Prereq VPS

- **OS**: Ubuntu 22.04 / 24.04 LTS (rekomendasi). Debian 12 juga OK.
- **Spec minimum**: 2 vCPU, **4 GB RAM**, 25 GB disk. (Build 5 Next.js bisa OOM kalau RAM kecil — siapkan swap kalau cuma 2 GB.)
- **Akses**: SSH dengan user yang sudah punya `sudo`.

---

## Step 1 — Install Docker, Nginx, Certbot di VPS (sekali saja)

```bash
ssh user@your-vps-ip

# Docker Engine + Compose plugin
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker

# Nginx native + Certbot dengan plugin nginx
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx

# Verify
docker --version
docker compose version
nginx -v
certbot --version
```

Firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'      # opens 80 + 443
sudo ufw enable
sudo ufw status
```

(Opsional) Swap kalau RAM cuma 2 GB:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
free -h
```

---

## Step 2 — DNS records (Cloudflare)

Tambah **6 A records** di Cloudflare zone `landingklinik.id`, semua point ke IP VPS:

| Type | Name | Target | Proxy status |
|---|---|---|---|
| A | `@` (apex) | `<VPS_IP>` | **DNS only** (gray cloud) |
| A | `www` | `<VPS_IP>` | **DNS only** |
| A | `demo-general` | `<VPS_IP>` | **DNS only** |
| A | `demo-aesthetic` | `<VPS_IP>` | **DNS only** |
| A | `demo-pediatric` | `<VPS_IP>` | **DNS only** |
| A | `demo-dashboard` | `<VPS_IP>` | **DNS only** |

> ⚠️ **Proxy harus DNS only (gray cloud)** untuk first-time SSL issuance. Certbot pakai HTTP-01 challenge (port 80) — Cloudflare proxy akan block ini.
>
> Setelah cert issued, boleh enable proxy (orange cloud) untuk performa & DDoS. Auto-renew certbot pakai HTTP-01 yang akan terblokir → kamu perlu **temporary disable proxy saat renewal** atau switch ke DNS-01 challenge dengan Cloudflare API token. Lebih simple: biarkan DNS only.

> ⚠️ **CRITICAL untuk apex `landingklinik.id`**: domain ini sudah live di Vercel. Jangan langsung ganti A record `@` sebelum container di VPS sudah verified jalan. Lihat **Step 7** (safe migration).

Tunggu propagasi 1-5 menit, verify dari laptop:
```bash
dig +short demo-general.landingklinik.id
# harus return IP VPS
```

---

## Step 3 — Upload kode ke VPS

```bash
# Opsi A: git clone (rekomendasi)
cd ~ && git clone https://github.com/aldirifai/landingklinik-stack.git
cd landingklinik-stack

# Opsi B: rsync dari Windows (Git Bash atau WSL)
# Dari D:\Explore\dental\
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.vercel' \
  ./ user@your-vps-ip:~/landingklinik-stack/
```

---

## Step 4 — Build & start 5 container Docker

```bash
cd ~/landingklinik-stack
docker compose up -d --build
```

Build pertama ~10-15 menit (5 project, npm install + next build serial). Setelah selesai:

```bash
docker compose ps     # 5 container Up (status healthy)
ss -tlnp | grep 4705   # harus listen di 127.0.0.1:47050-47054
```

Test container internal (sebelum nginx):
```bash
curl http://127.0.0.1:47050/    # landingklinik
curl http://127.0.0.1:47051/    # demo-general
curl http://127.0.0.1:47052/    # demo-aesthetic
curl http://127.0.0.1:47053/    # demo-pediatric
curl http://127.0.0.1:47054/    # demo-dashboard
```
Semua harus return HTML 200. Kalau gagal → cek `docker compose logs <service>`.

---

## Step 5 — Setup nginx server block (HTTP only dulu)

5 file config self-contained, langsung tembak port — tidak include snippet apapun. Filename tanpa extension `.conf` (konvensi standard `/etc/nginx/sites-available/`).

```bash
cd ~/landingklinik-stack/nginx-examples

# 1. Copy 5 server block ke sites-available
sudo cp landingklinik.id                /etc/nginx/sites-available/
sudo cp demo-general.landingklinik.id   /etc/nginx/sites-available/
sudo cp demo-aesthetic.landingklinik.id /etc/nginx/sites-available/
sudo cp demo-pediatric.landingklinik.id /etc/nginx/sites-available/
sudo cp demo-dashboard.landingklinik.id /etc/nginx/sites-available/

# 2. Enable 4 demo dulu (symlink). Apex sengaja DITAHAN — lihat Step 7
sudo ln -sf /etc/nginx/sites-available/demo-general.landingklinik.id   /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/demo-aesthetic.landingklinik.id /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/demo-pediatric.landingklinik.id /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/demo-dashboard.landingklinik.id /etc/nginx/sites-enabled/

# 3. Test syntax & reload
sudo nginx -t
sudo systemctl reload nginx
```

> Edit langsung di VPS: `sudo nano /etc/nginx/sites-available/demo-general.landingklinik.id` lalu `sudo nginx -t && sudo systemctl reload nginx`.

Test HTTP (belum HTTPS) — dari VPS:
```bash
curl -H "Host: demo-general.landingklinik.id" http://localhost/
# Harus return HTML demo-general
```

Dari laptop:
```bash
curl http://demo-general.landingklinik.id/
# Harus return HTML demo-general (DNS sudah point ke VPS)
```

---

## Step 6 — Issue SSL cert dengan certbot (4 subdomain demo dulu)

Per subdomain:

```bash
sudo certbot --nginx -d demo-general.landingklinik.id
sudo certbot --nginx -d demo-aesthetic.landingklinik.id
sudo certbot --nginx -d demo-pediatric.landingklinik.id
sudo certbot --nginx -d demo-dashboard.landingklinik.id
```

Pertama kali jalankan certbot, dia akan tanya:
- Email (untuk notif renewal failure) → isi email valid
- Agree TOS Let's Encrypt
- Mau redirect HTTP → HTTPS? → **pilih "Redirect" (option 2)**

Certbot akan auto-modify file di `/etc/nginx/sites-available/` — tambah `listen 443 ssl`, `ssl_certificate ...`, dan redirect block 80→443.

Verify:
```bash
sudo nginx -t
curl -I https://demo-general.landingklinik.id/   # HTTP/2 200
curl -I http://demo-general.landingklinik.id/    # 301 → https
```

Auto-renewal sudah otomatis via systemd timer:
```bash
sudo systemctl status certbot.timer
sudo certbot renew --dry-run    # test renewal tanpa benar-benar renew
```

Cert expire 90 hari, certbot renew 30 hari sebelum expire.

---

## Step 7 — (KRITIS) Migrate apex `landingklinik.id` dari Vercel ke VPS

Domain apex saat ini di Vercel. Lakukan dengan urutan ini supaya downtime minimum:

### 7a. Verify 4 subdomain demo jalan stable

Test seluruh stack pakai 4 subdomain demo (yang baru, no risk). Pastikan semua HTTPS jalan & tidak ada error log selama **24 jam**. Ini validasi nginx config & Docker setup sudah benar.

```bash
sudo tail -f /var/log/nginx/demo-general.error.log
docker compose logs --tail=50 demo-general
```

### 7b. Test apex via curl --resolve sebelum DNS switch

Simulasi DNS switch tanpa benar-benar switch — paksa resolve ke VPS IP:

```bash
# Dari laptop
curl --resolve landingklinik.id:80:<VPS_IP> -H "Host: landingklinik.id" \
     http://landingklinik.id/
```

Harus return HTML portfolio dari container `landingklinik` di VPS (bukan Vercel). Karena server block apex belum di-enable, kemungkinan ke-route ke nginx default — perlu enable dulu:

```bash
sudo ln -sf /etc/nginx/sites-available/landingklinik.id /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Lalu test ulang dengan curl --resolve di atas.

### 7c. Switch DNS

Di Cloudflare:
- A record `@` → ganti dari Vercel IP ke `<VPS_IP>`, **DNS only**
- A record `www` → ganti ke `<VPS_IP>`, **DNS only**

Tunggu propagasi (1-5 menit, cek di [whatsmydns.net](https://whatsmydns.net) untuk confirm global propagation).

### 7d. Issue cert apex

```bash
sudo certbot --nginx -d landingklinik.id -d www.landingklinik.id
```

Verify:
```bash
curl -I https://landingklinik.id/         # 200
curl -I https://www.landingklinik.id/     # 301 → https://landingklinik.id
```

### 7e. Pause Vercel project

Setelah VPS stable 24 jam (cek error log nginx + container log), pause project Vercel (Settings → General → Pause). Biarkan beberapa minggu sebelum delete, jaga-jaga rollback.

---

## Operasi sehari-hari

### Logs

```bash
# Container app
docker compose logs -f landingklinik
docker compose logs -f demo-general
docker compose logs --tail=100 demo-dashboard

# Nginx
sudo tail -f /var/log/nginx/landingklinik.id.access.log
sudo tail -f /var/log/nginx/demo-general.error.log
```

### Restart

```bash
# Container (proxy nginx tetap jalan, akan return 502 saat container down)
docker compose restart demo-general

# Nginx
sudo systemctl reload nginx       # reload config tanpa drop koneksi
sudo systemctl restart nginx      # restart total
```

### Update kode satu service

```bash
cd ~/landingklinik-stack
git pull
docker compose up -d --build demo-general
# Container baru auto-replace yang lama, port mapping tetap, nginx tidak perlu di-reload
```

### Update semua

```bash
cd ~/landingklinik-stack
git pull
docker compose up -d --build
docker image prune -f      # bersihkan image lama
```

### Resource

```bash
docker stats                     # live container resource
docker system df                 # disk usage
```

---

## Troubleshooting

### Nginx return 502 Bad Gateway

Container belum up atau crash:
```bash
docker compose ps                     # container status
docker compose logs <service>         # cek error
ss -tlnp | grep 30                    # port apakah listen?
curl http://127.0.0.1:47051/          # bypass nginx, test container langsung
```

### Certbot gagal — "DNS problem: NXDOMAIN looking up A"
- DNS belum propagasi → tunggu, cek `dig +short <domain>`
- Cloudflare proxy on (orange) → matikan dulu

### Certbot gagal — "Connection refused" port 80
- nginx tidak listen 80 → `sudo ss -tlnp | grep :80` harus ada nginx
- Firewall blocking → `sudo ufw status` harus ada `Nginx Full`
- Sites-enabled tidak ada server block dengan `server_name <domain>` → cek `sudo nginx -T | grep server_name`

### Container crashloop
```bash
docker compose logs <service>
```
Biasanya:
- Build error → cek source di repo
- OOM saat build → enable swap, atau build satu per satu: `docker compose up -d --build landingklinik`
- Port conflict (47050-47054 kepake proses lain) → cek `ss -tlnp | grep 4705`. Kalau bentrok, ganti port di `docker-compose.yml` + nginx config (harus match angkanya).

### Cert renewal failed
```bash
sudo certbot renew --dry-run
sudo systemctl status certbot.timer
sudo journalctl -u certbot.timer
```
Common cause: nginx config rusak setelah edit manual → `sudo nginx -t`.

### "Too many redirects" setelah enable Cloudflare proxy
- Cloudflare SSL mode harus **Full (strict)**, bukan Flexible
- Nginx sudah ada redirect 80→443 dari certbot, jangan duplikasi

---

## Ringkasan checklist deploy pertama kali

- [ ] VPS provisioned, SSH access OK
- [ ] Docker + Compose, nginx, certbot terinstall
- [ ] Firewall: 22, 80, 443 (TCP) allowed
- [ ] (Optional) Swap 2 GB enabled
- [ ] DNS A records ditambahkan (4 demo dulu, apex/www nanti), **proxy off**
- [ ] Code di-upload ke VPS
- [ ] `docker compose up -d --build` sukses (5 container Up, listen 127.0.0.1:47050-47054)
- [ ] Nginx config 4 subdomain di-copy & enable, `nginx -t` pass
- [ ] Certbot issue cert untuk 4 subdomain demo
- [ ] Verify 4 demo akses HTTPS sukses
- [ ] **Setelah 24 jam stable**: switch DNS apex/www ke VPS, enable nginx apex config, certbot apex
- [ ] Pause Vercel project setelah migrasi sukses 24 jam
