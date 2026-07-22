import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function Header() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  let displayName = "Administrator";
  let displayEmail = "admin@acustardtechnologies.com";

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      if (typeof payload === "object" && payload !== null) {
        const record = payload as { email?: string; role?: string };
        displayName = record.role ? `${record.role}` : "Administrator";
        displayEmail = record.email || displayEmail;
      }
    } catch {
      // Invalid token is handled by middleware.
    }
  }

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
          {displayName.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="font-semibold text-slate-900">{displayName}</p>
          <p className="text-sm text-slate-500">{displayEmail}</p>
        </div>
      </div>
    </header>
  );
}