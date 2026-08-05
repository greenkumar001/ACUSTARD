"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Login failed");
      }

      router.replace("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />

      {/* Blur effects */}
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl md:h-60 md:w-60 lg:h-72 lg:w-72" />

      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl md:h-60 md:w-60 lg:h-80 lg:w-80" />

      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl md:h-48 md:w-48 lg:h-60 lg:w-60" />


      {/* Login form */}
      <form
        onSubmit={handleLogin}
        className="
      relative z-10
      w-full
      max-w-[400px]
      rounded-3xl
      border border-white/20
      bg-white/10
      p-6
      shadow-2xl
      backdrop-blur-xl
      sm:p-8
    "
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="
        mb-4
        w-full
        rounded-xl
        border border-white/20
        bg-white/10
        p-3
        text-white
        outline-none
      "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="
        mb-6
        w-full
        rounded-xl
        border border-white/20
        bg-white/10
        p-3
        text-white
        outline-none
      "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="mb-4 text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="
        w-full
        rounded-xl
        bg-blue-600
        p-3
        text-white
        transition-all
        hover:bg-blue-700
      "
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  );
}