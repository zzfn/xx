import useSWR from 'swr';
import api from '@/lib/api/request';

export function useGuides(gameId: string) {
  const { data, error, isLoading } = useSWR(
    `/games/${gameId}/guides`,
    () => api.get(`/games/${gameId}/guides`)
  );

  return {
    guides: data?.guides,
    isLoading,
    isError: error,
  };
} 