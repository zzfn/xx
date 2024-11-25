'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              GameGuide
            </span>
          </Link>

          {/* 主导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/games" active={pathname.startsWith('/games')}>
              游戏攻略
            </NavLink>
            <NavLink href="/discussions" active={pathname.startsWith('/discussions')}>
              讨论区
            </NavLink>
          </div>

          {/* 右侧工具栏 */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/profile"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, active, children }: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`
        px-3 py-2 rounded-md text-sm font-medium
        ${active 
          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
        }
      `}
    >
      {children}
    </Link>
  );
} 