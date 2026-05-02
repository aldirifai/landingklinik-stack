import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="section bg-navy-900 text-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold-400">Smile design process</span>
          <h2 className="display-h2 mt-3 text-white">
            Empat langkah, satu hasil yang Anda setujui
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Tidak ada eksekusi tanpa preview dan tanda tangan. Anda lihat hasil
            akhirnya dulu dalam 3D, baru kami mulai treatment.
          </p>
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-3 bg-navy-900 p-6 sm:p-7"
            >
              <span className="font-display text-2xl text-gold-400 sm:text-3xl">
                {step.number}
              </span>
              <h3 className="font-display text-lg text-white sm:text-xl">{step.title}</h3>
              <span className="text-[10px] uppercase tracking-wider text-white/50">
                {step.duration}
              </span>
              <p className="text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
