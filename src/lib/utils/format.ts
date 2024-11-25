export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatNumber(num: number) {
  return new Intl.NumberFormat('zh-CN').format(num);
} 