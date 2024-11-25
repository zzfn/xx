'use client';

import { useGuides } from '@/hooks/useGuides';
import { GuideCard, LoadingSpinner } from '@/components/ui';

export default function GameGuidesPage({ params }: { params: { id: string } }) {
  const { guides, isLoading, isError } = useGuides(params.id);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>加载失败</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">游戏攻略</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides?.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
} 