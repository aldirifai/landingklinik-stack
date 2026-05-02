import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-coral-500">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Sepertinya tersesat seperti gigi susu yang baru goyang.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-12 items-center rounded-2xl bg-coral-400 px-6 text-sm font-bold text-white shadow-coral hover:bg-coral-500"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
