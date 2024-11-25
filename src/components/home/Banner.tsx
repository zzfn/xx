export default function Banner() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* 背景图层 */}
      <div 
        className="absolute inset-0 bg-[url('/images/banner-bg.jpg')] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('/images/xianxia-bg.jpg')`
        }}
      />
      
      {/* 装饰云纹 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* 内容区域 */}
      <div className="relative container mx-auto h-full flex items-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-noto-sans)]">
            寻仙攻略
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            十年情怀，助你踏上修仙之路
          </p>
          <div className="flex gap-4">
            <a
              href="/guides/newbie"
              className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors"
            >
              新手指南
            </a>
            <a
              href="/guides/classes"
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors"
            >
              职业攻略
            </a>
          </div>
        </div>
      </div>

      {/* 动态效果 - 飘动的云纹 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="cloud-1 absolute w-40 h-20 bg-white/10" />
          <div className="cloud-2 absolute w-40 h-20 bg-white/10" />
        </div>
      </div>
    </div>
  );
} 