'use client';

import { useState } from 'react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { PostCard } from './PostCard';

export function PostList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, hasMore } = useInfiniteScroll(`/discussions?page=${page}`);

  return (
    <div className="space-y-4">
      {data?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {isLoading && <div>加载中...</div>}
      {hasMore && (
        <button 
          onClick={() => setPage(p => p + 1)}
          className="w-full py-2 text-center text-gray-600 hover:text-gray-900"
        >
          加载更多
        </button>
      )}
    </div>
  );
} 