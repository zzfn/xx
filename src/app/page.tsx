import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sword, Book, Map, Crown, Flame } from "lucide-react";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 顶部Banner */}
      <Banner />
      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-12">
        {/* 快速入口 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <QuickLink
            href="/guides/newbie"
            title="新手指南"
            icon={<Book className="w-6 h-6" />}
            description="入门必读攻略"
          />
          <QuickLink
            href="/guides/classes"
            title="职业攻略"
            icon={<Sword className="w-6 h-6" />}
            description="职业特色详解"
          />
          <QuickLink
            href="/guides/maps"
            title="地图攻略"
            icon={<Map className="w-6 h-6" />}
            description="地图资源分布"
          />
          <QuickLink
            href="/guides/pvp"
            title="PVP攻略"
            icon={<Crown className="w-6 h-6" />}
            description="竞技场打法攻略"
          />
        </div>

        {/* 热门攻略 */}
        <section className="mb-12">
          <SectionHeader title="热门攻略" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GuideCard
              title="最强法宝搭配推荐"
              image="/guides/fabao.jpg"
              category="法宝攻略"
              views={1234}
            />
            <GuideCard
              title="新手快速升级路线"
              image="/guides/leveling.jpg"
              category="升级攻略"
              views={2345}
            />
            <GuideCard
              title="金币获取最佳方案"
              image="/guides/gold.jpg"
              category="资源攻略"
              views={3456}
            />
          </div>
        </section>

        {/* 最新攻略 */}
        <section className="mb-12">
          <SectionHeader title="最新攻略" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <GuideListItem
                key={i}
                title={`寻仙攻略标题 ${i}`}
                category="综合攻略"
                date="2024-03-20"
                author="游戏达人"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// 快速入口组件
function QuickLink({
  href,
  title,
  icon,
  description,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
}

// 区块标题组件
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Flame className="w-6 h-6 text-red-500" />
        {title}
      </h2>
      <Link
        href={`/guides`}
        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
      >
        查看更多 <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
// 攻略卡片组件
function GuideCard({
  title,
  image,
  category,
  views,
}: {
  title: string;
  image: string;
  category: string;
  views: number;
}) {
  return (
    <Link href="#" className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {category}
          </div>
          <h3 className="font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400">
            {title}
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {views.toLocaleString()} 阅读
          </div>
        </div>
      </div>
    </Link>
  );
}

// 攻略列表项组件
function GuideListItem({
  title,
  category,
  date,
  author,
}: {
  title: string;
  category: string;
  date: string;
  author: string;
}) {
  return (
    <Link
      href="#"
      className="block bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold mb-1 hover:text-primary-600 dark:hover:text-primary-400">
            {title}
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {category} · {author}
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{date}</div>
      </div>
    </Link>
  );
}
