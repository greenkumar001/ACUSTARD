import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import StatsCard from "@/components/admin/StatsCard";

import Enquiry from "@/models/Enquiry";
import connectDB from "@/lib/mongodb";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  let adminName = "Administrator";
  let adminEmail = "admin@acustardtechnologies.com";

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      if (typeof payload === "object" && payload !== null) {
        const record = payload as { email?: string; role?: string; id?: string };
        adminName = record.role ? `${record.role}` : "Administrator";
        adminEmail = record.email || adminEmail;
      }
    } catch {
      // Ignore invalid token; the middleware will redirect the user anyway.
    }
  }

  await connectDB();
  const enquiries = await Enquiry.find({}).sort({ createdAt: -1 }).limit(6).lean();

  const total = await Enquiry.countDocuments();
  const newCount = await Enquiry.countDocuments({ status: "new" });
  const contactedCount = await Enquiry.countDocuments({ status: "contacted" });
  const admissionCount = await Enquiry.countDocuments({ status: "admission" });

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Admin dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Welcome back, {adminName}</h1>
            <p className="mt-2 text-slate-600">Signed in as {adminEmail}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Access level: <span className="font-semibold text-slate-900">Admin</span>
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total Enquiries" value={total} />
        <StatsCard title="New Enquiries" value={newCount} />
        <StatsCard title="Contacted" value={contactedCount} />
        <StatsCard title="Admissions" value={admissionCount} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Recent Enquiries</h2>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            {enquiries.length > 0 ? `${enquiries.length} records` : "No recent activity"}
          </span>
        </div>

        {enquiries.length === 0 ? (
          <p className="mt-4 text-slate-500">No enquiries found yet.</p>
        ) : (
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Email</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">phone</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {enquiries.map((item: any) => (
                  <tr key={String(item._id)}>
                    <td className="px-4 py-3 text-slate-700">{item.fullName}</td>
                    <td className="px-4 py-3 text-slate-700">{item.email}</td>
                    <td className="px-4 py-3 text-slate-700">{item.phone}</td>
                    <td className="px-4 py-3 text-slate-700">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}