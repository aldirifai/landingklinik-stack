import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-navy-900 px-6 text-white">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-gold-400">404</p>
        <h1 className="mt-3 font-display text-5xl">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-sm text-white/70">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center rounded-md bg-gold-500 px-5 text-sm font-medium text-navy-900 hover:bg-gold-600"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
