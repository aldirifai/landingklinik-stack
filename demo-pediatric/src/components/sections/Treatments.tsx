import { Tabs } from "@/components/ui/Tabs";
import { treatments } from "@/lib/content";

export function Treatments() {
  const tabs = treatments.map((cat) => ({
    id: cat.category,
    label: cat.category,
    content: (
      <ul className="divide-y divide-coral-100 overflow-hidden rounded-2xl border-2 border-coral-100 bg-white">
        {cat.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5"
          >
            <div className="min-w-0">
              <p className="text-sm font-bold text-ink sm:text-base">
                {item.name}
              </p>
              {item.note && (
                <p className="text-xs text-slate-500">{item.note}</p>
              )}
            </div>
            <span className="shrink-0 text-sm font-extrabold text-coral-600 sm:text-base">
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
          <span className="eyebrow">Layanan kami</span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Semua yang dibutuhkan gigi si kecil
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Dari introduction visit untuk yang baru pertama kali, sampai
            ortodonti early intervention.
          </p>
        </div>

        <div className="mt-10">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
