# Nginx server blocks (5 site)

5 file config self-contained — langsung tembak port. Tidak ada `include` snippet, semua header proxy inline. Filename tanpa extension `.conf` (match konvensi Ubuntu/Debian `/etc/nginx/sites-available/`).

## Port mapping (sesuai `docker-compose.yml`)

Pakai range **47050-47054** — quiet, jauh dari port umum (3000s/8000s/9000s) supaya tidak bentrok.

| Domain | Container | Host port | File config |
|---|---|---|---|
| `landingklinik.id` (+ www redirect) | `landingklinik` | `127.0.0.1:47050` | `landingklinik.id` |
| `demo-general.landingklinik.id` | `demo-general` | `127.0.0.1:47051` | `demo-general.landingklinik.id` |
| `demo-aesthetic.landingklinik.id` | `demo-aesthetic` | `127.0.0.1:47052` | `demo-aesthetic.landingklinik.id` |
| `demo-pediatric.landingklinik.id` | `demo-pediatric` | `127.0.0.1:47053` | `demo-pediatric.landingklinik.id` |
| `demo-dashboard.landingklinik.id` | `demo-dashboard` | `127.0.0.1:47054` | `demo-dashboard.landingklinik.id` |

## Install di VPS

```bash
cd ~/landingklinik-stack/nginx-examples

# Copy semua config ke sites-available
sudo cp landingklinik.id                      /etc/nginx/sites-available/
sudo cp demo-general.landingklinik.id         /etc/nginx/sites-available/
sudo cp demo-aesthetic.landingklinik.id       /etc/nginx/sites-available/
sudo cp demo-pediatric.landingklinik.id       /etc/nginx/sites-available/
sudo cp demo-dashboard.landingklinik.id       /etc/nginx/sites-available/

# Enable 4 demo dulu (apex landingklinik.id sengaja ditahan, lihat DEPLOY.md Step 7)
sudo ln -sf /etc/nginx/sites-available/demo-general.landingklinik.id    /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/demo-aesthetic.landingklinik.id  /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/demo-pediatric.landingklinik.id  /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/demo-dashboard.landingklinik.id  /etc/nginx/sites-enabled/

# Test syntax & reload
sudo nginx -t
sudo systemctl reload nginx

# Issue cert per subdomain
sudo certbot --nginx -d demo-general.landingklinik.id
sudo certbot --nginx -d demo-aesthetic.landingklinik.id
sudo certbot --nginx -d demo-pediatric.landingklinik.id
sudo certbot --nginx -d demo-dashboard.landingklinik.id

# Apex (HANYA setelah migrasi dari Vercel — lihat DEPLOY.md Step 7)
sudo ln -sf /etc/nginx/sites-available/landingklinik.id /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d landingklinik.id -d www.landingklinik.id
```

## Edit langsung di VPS

```bash
sudo nano /etc/nginx/sites-available/demo-general.landingklinik.id
sudo nginx -t && sudo systemctl reload nginx
```

## Apa yang akan ditambahkan certbot otomatis

Setelah `sudo certbot --nginx -d <domain>`, file config akan ditambahi:

```nginx
listen 443 ssl;                       # ditambah ke server block
listen [::]:443 ssl;
ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
include /etc/letsencrypt/options-ssl-nginx.conf;
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

# Plus server block baru untuk redirect 80 → 443:
server {
    if ($host = <domain>) {
        return 301 https://$host$request_uri;
    }
    listen 80;
    server_name <domain>;
    return 404;
}
```

Auto-renew tiap 60 hari via `certbot.timer` (sistemd).

Detail lengkap di `../DEPLOY.md`.
