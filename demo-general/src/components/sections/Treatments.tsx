import { Tabs } from "@/components/ui/Tabs";
import { treatments } from "@/lib/content";

export function Treatments() {
  const tabs = treatments.map((cat) => ({
    id: cat.category,
    label: cat.category,
    content: (
      <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {cat.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm font-medium text-ink sm:text-base">
              {item.name}
            </span>
            <span className="text-sm font-semibold text-brand-600 sm:text-base">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section id="treatments" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Layanan & Harga</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Semua harga dijelaskan di awal sebelum tindakan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Tidak ada biaya tersembunyi. Estimasi harga dijelaskan di konsultasi awal,
            jadi Anda bisa memutuskan dengan tenang.
          </p>
        </div>

        <div className="mt-10">
          <Tabs tabs={tabs} />
        </div>

        <p className="mt-6 text-xs text-slate-500">
          *Harga dapat bervariasi tergantung tingkat kesulitan, akan dijelaskan saat konsultasi.
        </p>
      </div>
    </section>
  );
}
