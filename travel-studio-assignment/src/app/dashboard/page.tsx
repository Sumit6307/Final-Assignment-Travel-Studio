'use client';

import { useRequests, Request } from '@/lib/api/requestsApi';

/**
 * Dashboard page displaying guest requests
 */
export default function Dashboard() {
  const { data: requests, isLoading, error } = useRequests();

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Guest Requests Dashboard</h1>
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error.message}</p>}
      {requests && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-luxury-blue text-luxury-white">
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Request</th>
                <th className="p-2 border">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request: Request) => (
                <tr key={request.id} className="border">
                  <td className="p-2">{request.guestPhone}</td>
                  <td className="p-2">{request.requestText}</td>
                  <td className="p-2">{new Date(request.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}