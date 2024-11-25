import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "游戏攻略网 - 你的游戏攻略指南",
  description: "最全面的游戏攻略、游戏资讯、玩家讨论社区",
  keywords: "游戏攻略,游戏攻略网,游戏社区,游戏讨论",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        {/* 导航栏 */}
        <Navbar />
        
        {/* 主要内容区域 */}
        <main className="min-h-screen pt-16 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* 页脚 */}
        <Footer />
      </body>
    </html>
  );
}
