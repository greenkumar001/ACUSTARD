import Link from "next/link";

import Enquiry from "@/models/Enquiry";
import DeleteEnquiryButton from "@/components/admin/DeleteEnquiryButton";
import UpdateEnquiryStatus from "@/components/admin/UpdateEnquiryStatus";
import connectDB from "@/lib/mongodb";

const PAGE_SIZE = 10;

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const page = Number(params.page || 1);
  const safePage = Number.isNaN(page) || page < 1 ? 1 : page;

  await connectDB();
  const total = await Enquiry.countDocuments();
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(safePage, totalPages);
  const skip = (currentPage - 1) * PAGE_SIZE;

  const enquiries = await Enquiry.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(PAGE_SIZE)
    .lean();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Admin</p>
          <h1 className="text-3xl font-bold text-slate-900">Enquiries</h1>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {enquiries.length === 0 ? (
          <p className="text-slate-500">No enquiries found.</p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-slate-200">
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
                    {/* <td className="px-4 py-3 text-slate-700">
                      {item.resumeLink ? (
                        <a
                          href={item.resumeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          View Resume
                        </a>
                      ) : (
                        <span className="text-slate-500">Not provided</span>
                      )}
                    </td> */}
                    {/* <td className="px-4 py-3 text-slate-700">{item.message}</td>
                    <td className="px-4 py-3 text-slate-700">{item.applicationType}</td> */}
                    <td className="px-4 py-3 text-slate-700">
                      <UpdateEnquiryStatus enquiryId={String(item._id)} currentStatus={String(item.status || "new")} />
                    </td>
                    <td className="px-4 py-3 text-slate-700">{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-slate-700">
                      <DeleteEnquiryButton enquiryId={String(item._id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-2">
            <Link
              href={`/admin/enquiries?page=${Math.max(1, currentPage - 1)}`}
              className={`rounded border px-3 py-2 text-sm ${currentPage <= 1 ? "pointer-events-none opacity-50" : "border-slate-300 text-slate-700"}`}
            >
              Previous
            </Link>
            <Link
              href={`/admin/enquiries?page=${Math.min(totalPages, currentPage + 1)}`}
              className={`rounded border px-3 py-2 text-sm ${currentPage >= totalPages ? "pointer-events-none opacity-50" : "border-slate-300 text-slate-700"}`}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
