'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import dayjs from 'dayjs';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface GuideDetail {
  id: string;
  title: string;
  coverImage: string;
  content: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
  author: {
    name: string;
    avatar: string;
  };
}

export default function GuideDetailPage() {
  const params = useParams();
  const [guide, setGuide] = useState<GuideDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGuideDetail();
  }, [params.id]);

  const fetchGuideDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/guides/${params.id}`);
      if (!response.ok) throw new Error('获取攻略详情失败');
      const data = await response.json();
      setGuide(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !guide) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error || '攻略不存在'}
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 文章头部 */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
        <div className="flex items-center justify-between text-gray-600 mb-6">
          <div className="flex items-center space-x-4">
            <span>{guide.createdBy}</span>
            <span>{dayjs(guide.createdAt).format('YYYY-MM-DD')}</span>
          </div>
          <div className="flex space-x-4">
            <span>👁 {guide.viewCount}</span>
            <span>❤️ {guide.likeCount}</span>
          </div>
        </div>
      </header>

      {/* 文章内容 */}
      <div className="prose max-w-none">
        <MarkdownRenderer markdown={guide.content} />
      </div>

      {/* 文章底部 */}
      <footer className="mt-8 pt-8 border-t">
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            点赞 ({guide.likeCount})
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            分享
          </button>
        </div>
      </footer>
    </article>
  );
} 