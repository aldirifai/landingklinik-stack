import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { articles } from "@/lib/content";

const palette = [
  "from-coral-100 to-coral-200 text-coral-700",
  "from-mint-100 to-mint-200 text-mint-700",
  "from-sun-100 to-sun-50 text-sun-500",
];

export function Articles() {
  return (
    <section id="articles" className="section bg-white">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Untuk para orangtua</span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Belajar bareng tentang kesehatan gigi anak
            </h2>
          </div>
          <p className="max-w-xs text-sm text-slate-600">
            Kami percaya parent yang teredukasi adalah partner terbaik untuk
            kesehatan gigi anak jangka panjang.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <Card key={article.slug} className="flex flex-col p-0 overflow-hidden">
              <div className={`grid h-32 place-items-center bg-gradient-to-br ${palette[i % palette.length]}`}>
                <span className="font-display text-4xl font-extrabold opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </p>
                <h3 className="mt-3 text-lg leading-snug text-ink">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {article.preview}
                </p>
                <Link
                  href={`#${article.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-coral-600 hover:text-coral-700"
                >
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
