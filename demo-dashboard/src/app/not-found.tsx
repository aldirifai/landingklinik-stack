import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-brand-600">
          404
        </p>
        <h1 className="mt-3 text-2xl font-bold text-gray-900">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          URL yang Anda akses tidak ada di dashboard ini.
        </p>
        <Link
          href="/inbox"
          className="mt-6 inline-flex h-10 items-center rounded-md bg-brand-500 px-4 text-sm font-medium text-white hover:bg-brand-600"
        >
          Ke inbox
        </Link>
      </div>
    </main>
  );
}
