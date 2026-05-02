import { treatments } from "@/lib/content";

export function Treatments() {
  return (
    <section id="treatments" className="section bg-navy-50/40">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Investasi & material</span>
          <h2 className="display-h2 mt-3 text-navy-900">
            Daftar layanan & estimasi biaya
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-700">
            Range harga mencakup pilihan material standard hingga premium.
            Final quote diberikan setelah konsultasi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {treatments.map((cat) => (
            <div
              key={cat.category}
              className="overflow-hidden rounded-md border border-navy-100 bg-white"
            >
              <div className="border-b border-navy-100 bg-navy-900 px-6 py-4">
                <h3 className="font-display text-lg text-white">
                  {cat.category}
                </h3>
              </div>
              <ul className="divide-y divide-navy-100">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-navy-900">
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="text-xs italic text-navy-500">{item.note}</p>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gold-700 sm:text-right">
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
