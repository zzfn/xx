import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import "./globals.css";

// 使用思源黑体
const notoSansSC = Noto_Sans_SC({ 
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "寻仙游戏攻略 - 修仙之路从这里开始",
  description: "最全面的寻仙游戏攻略网站，提供新手教程、职业攻略、法宝系统、副本攻略等全方位游戏指南",
  keywords: "寻仙,寻仙攻略,寻仙游戏,修仙游戏,法宝攻略,职业攻略",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body 
        className={`
          ${notoSansSC.variable} 
          font-sans
          bg-gradient-to-b from-amber-50 to-white
          dark:from-gray-900 dark:to-gray-800
          min-h-screen
        `}
      >
        {/* 背景装饰 */}
        <div className="fixed inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[url('/cloud-pattern.png')] bg-repeat-x" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('/cloud-pattern.png')] bg-repeat-x transform rotate-180" />
        </div>

        {/* 导航栏 */}
        <Navbar />
        
        {/* 主要内容区域 */}
        <main className="relative pt-16 pb-8 min-h-[calc(100vh-64px)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* 页脚 */}
        <Footer />

        {/* 返回顶部按钮 */}
        <BackToTop />
      </body>
    </html>
  );
}
