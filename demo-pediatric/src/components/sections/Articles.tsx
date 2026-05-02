import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { articles } from "@/lib/content";
import { articleImages } from "@/lib/images";

const tints = [
  "ring-coral-100 bg-coral-50",
  "ring-mint-100 bg-mint-50",
  "ring-sun-100 bg-sun-50",
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
              <div className={`relative h-40 overflow-hidden ring-2 ${tints[i % tints.length]}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={articleImages[article.slug]}
                  alt={article.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={600}
                  height={300}
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-display text-sm font-extrabold text-coral-600 shadow-soft">
                  #{String(i + 1).padStart(2, "0")}
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
