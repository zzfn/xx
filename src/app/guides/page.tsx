'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

interface Guide {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
}

export default function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchGuides();
  }, [page]);

  const fetchGuides = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/guides?page=${page}&limit=10`);
      if (!response.ok) throw new Error('获取攻略列表失败');
      const data = await response.json();
      setGuides(data.data);
      setHasMore(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 搜索栏 */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="搜索攻略..."
          className="w-full md:w-96 px-4 py-2 border rounded-lg"
        />
      </div>

      {/* 文章列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link 
            key={guide.id} 
            href={`/guides/${guide.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <h2 className="text-xl font-semibold mb-3">{guide.title}</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {guide.description}
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{dayjs(guide.createdAt).format('YYYY-MM-DD')}</span>
              <div className="flex space-x-4">
                <span>👁 {guide.viewCount}</span>
                <span>❤️ {guide.likeCount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 加载更多 */}
      {hasMore && !loading && !error && (
        <div className="text-center mt-8">
          <button
            onClick={() => setPage(p => p + 1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            加载更多
          </button>
        </div>
      )}

      {/* 加载状态 */}
      {loading && (
        <div className="text-center mt-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}

      {/* 错误提示 */}
      {error && (
        <div className="text-center mt-8 text-red-500">
          {error}
        </div>
      )}
    </div>
  );
} 