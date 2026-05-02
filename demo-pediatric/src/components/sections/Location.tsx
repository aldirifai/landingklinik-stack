import { Car, Clock, MapPin, Phone, MessageCircle, Baby } from "lucide-react";
import { clinic } from "@/lib/content";

export function Location() {
  const { lat, lng } = clinic.mapsCoordinate;
  const mapsSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <section id="location" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Lokasi</span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Mudah dijangkau dari Surabaya Barat
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr,1.3fr]">
          <ul className="space-y-5 rounded-3xl border-2 border-coral-100 bg-white p-6">
            <Item icon={<MapPin className="h-5 w-5" />} label="Alamat" value={clinic.address} />
            <Item
              icon={<Clock className="h-5 w-5" />}
              label="Jam operasional"
              value={`${clinic.hours.weekday}\n${clinic.hours.weekend}`}
            />
            <Item icon={<Phone className="h-5 w-5" />} label="Telepon" value={clinic.phone} />
            <Item icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value={`+${clinic.whatsapp}`} />
            <Item icon={<Car className="h-5 w-5" />} label="Parkir" value="Parkir mobil & motor luas, drop-off zone untuk stroller" />
            <Item icon={<Baby className="h-5 w-5" />} label="Fasilitas anak" value="Reading corner, mini toy area, nursing room untuk adik bayi" />
          </ul>

          <div className="overflow-hidden rounded-3xl border-2 border-coral-100 bg-coral-50/40">
            <iframe
              title={`Lokasi ${clinic.name}`}
              src={mapsSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-coral-500">{icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="whitespace-pre-line text-sm text-ink">{value}</p>
      </div>
    </li>
  );
}
