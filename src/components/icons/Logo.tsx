export default function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 外圆环 - 代表道法自然 */}
      <circle 
        cx="16" 
        cy="16" 
        r="15" 
        stroke="url(#circleGradient)" 
        strokeWidth="2"
      />
      
      {/* 内部云纹装饰 */}
      <path
        d="M8 16C8 14 10 12 12 12C14 12 15 14 16 14C17 14 18 12 20 12C22 12 24 14 24 16C24 18 22 20 20 20H12C10 20 8 18 8 16Z"
        fill="url(#cloudGradient)"
      />
      
      {/* 中心仙剑 */}
      <path
        d="M16 8L17 20H15L16 8Z"
        fill="url(#swordGradient)"
      />
      <path
        d="M13 22H19L16 24L13 22Z"
        fill="url(#swordGradient)"
      />
      
      {/* 渐变定义 */}
      <defs>
        <linearGradient
          id="circleGradient"
          x1="16"
          y1="0"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA500" />
          <stop offset="1" stopColor="#8B0000" />
        </linearGradient>
        
        <linearGradient
          id="cloudGradient"
          x1="16"
          y1="12"
          x2="16"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA500" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FFA500" stopOpacity="0.1" />
        </linearGradient>
        
        <linearGradient
          id="swordGradient"
          x1="16"
          y1="8"
          x2="16"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA500" />
          <stop offset="1" stopColor="#8B0000" />
        </linearGradient>
      </defs>
    </svg>
  );
} 