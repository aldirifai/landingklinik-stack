import { MapPin, Clock, Phone, MessageCircle, Car } from "lucide-react";
import { clinic } from "@/lib/content";

export function Location() {
  const { lat, lng } = clinic.mapsCoordinate;
  const mapsSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <section id="location" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Lokasi</span>
          <h2 className="display-h2 mt-3 text-navy-900">
            Kunjungi kami di Lenmarc Mall
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,1.5fr] lg:items-stretch">
          <div className="rounded-md border border-navy-100 bg-navy-50/40 p-7">
            <ul className="space-y-5">
              <Item
                icon={<MapPin className="h-5 w-5" />}
                label="Alamat"
                value={clinic.address}
              />
              <Item
                icon={<Clock className="h-5 w-5" />}
                label="Jam operasional"
                value={`${clinic.hours.weekday}\n${clinic.hours.weekend}`}
              />
              <Item
                icon={<Phone className="h-5 w-5" />}
                label="Telepon"
                value={clinic.phone}
              />
              <Item
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value={`+${clinic.whatsapp}`}
              />
              <Item
                icon={<Car className="h-5 w-5" />}
                label="Parking"
                value="Valet parking tersedia. Mall parking 3-tier."
              />
            </ul>
            <div className="mt-6 rounded-md border border-gold-500/30 bg-gold-50/60 p-4">
              <p className="text-xs uppercase tracking-widest text-gold-700">
                Private consultation
              </p>
              <p className="mt-2 text-sm text-navy-800">
                Ruang konsultasi tertutup. Pasien profesional yang membutuhkan
                privacy lebih bisa request appointment di luar jam reguler.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-navy-100 bg-navy-50">
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
      <span className="mt-0.5 text-gold-600">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-navy-400">
          {label}
        </p>
        <p className="mt-1 whitespace-pre-line text-sm text-navy-900">{value}</p>
      </div>
    </li>
  );
}
