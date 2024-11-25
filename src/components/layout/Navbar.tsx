'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';

const navigation = [
  {
    name: '新手指南',
    href: '/guides/newbie',
  },
  {
    name: '职业攻略',
    href: '/guides/classes',
    children: [
      { name: '天音', href: '/guides/classes/tianyin' },
      { name: '飞羽', href: '/guides/classes/feiyu' },
      { name: '魅影', href: '/guides/classes/meiying' },
      { name: '血煞', href: '/guides/classes/xuesha' },
    ],
  },
  {
    name: '法宝系统',
    href: '/guides/fabao',
  },
  {
    name: '副本攻略',
    href: '/guides/dungeons',
  },
  {
    name: '任务攻略',
    href: '/guides/quests',
  },
  {
    name: 'PVP攻略',
    href: '/guides/pvp',
  },
  {
    name: '怀旧寻仙',
    href: '/guides/classic',
    children: [
      { name: '2010版', href: '/guides/classic/2010' },
      { name: '2012版', href: '/guides/classic/2012' },
      { name: '2014版', href: '/guides/classic/2014' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-amber-100 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              寻仙攻略
            </span>
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} pathname={pathname} />
            ))}
          </div>

          {/* 工具栏 */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-amber-50 dark:hover:bg-gray-700 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/profile"
              className="p-2 hover:bg-amber-50 dark:hover:bg-gray-700 rounded-full"
            >
              <User className="w-5 h-5" />
            </Link>
            
            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <MobileNavItem key={item.name} item={item} pathname={pathname} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
// 移动端导航项组件
interface NavItemType {
    name: string;
    href: string;
    children?: { name: string; href: string; }[];
  }
// 导航项组件
function NavItem({ item, pathname }: { item: NavItemType; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname.startsWith(item.href);

  if (item.children) {
    return (
      <div className="relative group">
        <button
          className={`
            px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1
            ${isActive 
              ? 'bg-amber-50 dark:bg-gray-700 text-amber-600 dark:text-amber-400'
              : 'text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700'
            }
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.name}
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {/* 下拉菜单 */}
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
          <div className="py-1">
            {item.children.map((child: NavItemType) => (
              <Link
                key={child.name}
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700"
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`
        px-3 py-2 rounded-md text-sm font-medium
        ${isActive 
          ? 'bg-amber-50 dark:bg-gray-700 text-amber-600 dark:text-amber-400'
          : 'text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700'
        }
      `}
    >
      {item.name}
    </Link>
  );
}

function MobileNavItem({ item, pathname }: { item: NavItemType; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname.startsWith(item.href);

  if (item.children) {
    return (
      <div>
        <button
          className={`
            w-full px-3 py-2 rounded-md text-base font-medium flex items-center justify-between
            ${isActive 
              ? 'bg-amber-50 dark:bg-gray-700 text-amber-600 dark:text-amber-400'
              : 'text-gray-600 dark:text-gray-300'
            }
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.name}
          <ChevronDown className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="ml-4">
            {item.children.map((child: NavItemType) => (
              <Link
                key={child.name}
                href={child.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300"
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`
        block px-3 py-2 rounded-md text-base font-medium
        ${isActive 
          ? 'bg-amber-50 dark:bg-gray-700 text-amber-600 dark:text-amber-400'
          : 'text-gray-600 dark:text-gray-300'
        }
      `}
    >
      {item.name}
    </Link>
  );
} 