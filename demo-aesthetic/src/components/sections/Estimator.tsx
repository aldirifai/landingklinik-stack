"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { FieldWrapper, Input, Select } from "@/components/ui/Input";
import { estimatorOptions } from "@/lib/content";
import { formatRupiah } from "@/lib/booking";

export function Estimator() {
  const [selectedId, setSelectedId] = useState(estimatorOptions[0]!.id);
  const selected = estimatorOptions.find((o) => o.id === selectedId)!;
  const [qty, setQty] = useState<number>(selected.defaultQty);

  const handleChangeOption = (id: string) => {
    const next = estimatorOptions.find((o) => o.id === id)!;
    setSelectedId(id);
    setQty(next.defaultQty);
  };

  const safeQty = useMemo(() => {
    if (Number.isNaN(qty) || qty < 1) return 1;
    if (qty > selected.maxQty) return selected.maxQty;
    return qty;
  }, [qty, selected.maxQty]);

  const low = selected.unitLow * safeQty;
  const high = selected.unitHigh * safeQty;

  return (
    <section id="estimator" className="section bg-navy-50/40">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:items-stretch">
          <div>
            <span className="eyebrow">Estimator</span>
            <h2 className="display-h2 mt-3 text-navy-900">
              Estimasi investasi Anda
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy-700">
              Indikasi kasar untuk membantu perencanaan budget. Angka final
              ditentukan setelah konsultasi dan smile design assessment.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-navy-700">
              {[
                "Termasuk material premium (Jerman, USA, Jepang)",
                "Tidak termasuk pajak dan administrasi",
                "Cicilan 0% available untuk treatment Rp 10jt+",
                "Garansi material 5-10 tahun tergantung treatment",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-gold-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-navy-100 bg-white p-7 shadow-refined sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-navy-50 text-navy-500">
                <Calculator className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-navy-900">
                  Treatment estimator
                </p>
                <p className="text-xs text-navy-400">Indikatif, bukan kuotasi resmi</p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <FieldWrapper label="Treatment" htmlFor="treatment-est">
                <Select
                  id="treatment-est"
                  value={selectedId}
                  onChange={(e) => handleChangeOption(e.target.value)}
                >
                  {estimatorOptions.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </Select>
              </FieldWrapper>

              <FieldWrapper
                label={`Jumlah ${selected.unit}`}
                htmlFor="qty-est"
                hint={`Minimum 1, maksimum ${selected.maxQty} ${selected.unit}`}
              >
                <Input
                  id="qty-est"
                  type="number"
                  min={1}
                  max={selected.maxQty}
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value, 10))}
                  disabled={selected.maxQty === 1}
                />
              </FieldWrapper>

              <div className="rounded-md border border-gold-500/30 bg-gold-50/60 p-5">
                <p className="text-[10px] uppercase tracking-widest text-gold-700">
                  Estimasi total
                </p>
                <p className="mt-2 font-display text-2xl text-navy-900 sm:text-3xl">
                  {low === high
                    ? formatRupiah(low)
                    : `${formatRupiah(low)} — ${formatRupiah(high)}`}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-navy-600">
                  Untuk {safeQty} {selected.unit} {selected.label.toLowerCase()}.
                  Range mencakup pilihan material standard hingga premium.
                </p>
              </div>

              <LinkButton href="#booking" size="lg" className="w-full">
                Konsultasi gratis untuk estimasi presisi
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
