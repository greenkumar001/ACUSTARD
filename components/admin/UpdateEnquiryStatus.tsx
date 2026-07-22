'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const statuses = ['new', 'contacted', 'admission', 'closed'];

export default function UpdateEnquiryStatus({ enquiryId, currentStatus }: { enquiryId: string; currentStatus: string }) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextStatus = event.target.value;
    setStatus(nextStatus);
    setIsUpdating(true);

    try {
      const response = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: enquiryId, status: nextStatus }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to update status');
      }

      router.refresh();
    } catch (error) {
      console.error('Status update failed:', error);
      setStatus(currentStatus);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <select
      value={status}
      disabled={isUpdating}
      onChange={handleChange}
      className="rounded border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-700 shadow-sm outline-none focus:border-slate-500"
    >
      {statuses.map((option) => (
        <option key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  );
}
