import { useQuery } from '@tanstack/react-query';

/**
 * Interface for a request
 */
export interface Request {
  id: number;
  guestPhone: string;
  requestText: string;
  createdAt: string;
  status: string;
}

/**
 * Fetch all pending requests
 * @returns Array of pending requests
 */
export const fetchRequests = async (): Promise<Request[]> => {
  const response = await fetch('http://localhost:3000/api/requests');
  if (!response.ok) {
    throw new Error('Failed to fetch requests');
  }
  return response.json();
};

/**
 * React Query hook to fetch requests
 */
export const useRequests = () => {
  return useQuery({
    queryKey: ['requests'],
    queryFn: fetchRequests,
  });
};