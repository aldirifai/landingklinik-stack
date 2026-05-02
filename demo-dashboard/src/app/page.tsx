"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LogIn, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { clinicName } from "@/lib/data";

export default function LoginPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => router.push("/inbox"), 200);
  };

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-canvas via-white to-brand-50 p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
            <Stethoscope className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-xl font-bold text-gray-900">
            {clinicName}
          </h1>
          <p className="text-sm text-gray-500">Dashboard internal</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="space-y-1">
            <label htmlFor="email" className="block text-xs font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              defaultValue="resepsionis@dentalcarestudio.demo"
              autoComplete="email"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-xs font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              defaultValue="demo-password-123"
              autoComplete="current-password"
            />
          </div>

          <Button type="submit" className="w-full" size="md" disabled={submitting}>
            <LogIn className="h-4 w-4" />
            {submitting ? "Mengarahkan..." : "Demo Login"}
          </Button>

          <div className="flex items-center justify-between text-xs">
            <a href="#" className="text-brand-600 hover:underline" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </a>
            <span className="text-gray-400">Demo only</span>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Dashboard demo untuk landingklinik.id — semua data fiktif.
        </p>
      </div>
    </main>
  );
}
