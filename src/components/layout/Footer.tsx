export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              关于我们
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  关于游戏攻略网
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  联系我们
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              帮助中心
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  使用指南
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  常见问题
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} GameGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 