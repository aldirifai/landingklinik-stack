import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center rounded-lg bg-brand-500 px-5 text-sm font-medium text-white hover:bg-brand-600"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
