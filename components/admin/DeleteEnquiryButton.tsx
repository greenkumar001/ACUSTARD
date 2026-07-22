'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteEnquiryButton({ enquiryId }: { enquiryId: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    const confirmed = window.confirm('Delete this enquiry? This action cannot be undone.');
    if (!confirmed) return;

    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/enquiries', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: enquiryId }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to delete enquiry');
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to delete enquiry');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
        className="rounded-md border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </div>
  );
}
