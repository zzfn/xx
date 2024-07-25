export function calculateCost(attributes: string) {
  let cost = 0;
  let steps:string[] = []; // Store steps here
  let attrArray = attributes.split('').map(Number);

  const upgrade = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 6) {
        arr[i]++;
        steps.push(`属性 ${arr[i]-1} 升级到 ${arr[i]} 免费`);
        return;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 7) {
        const sevensCount = arr.filter(num => num >= 7).length;
        if (sevensCount === 2) {
          cost += 5500;
          steps.push(`第三个6升7，花费 5500 仙玉`);
        } else if (sevensCount === 3) {
          cost += 6600;
          steps.push(`第四个6升7，花费 6600 仙玉`);
        }
        arr[i]++;
        return;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 8) {
        const eightsCount = arr.filter(num => num >= 8).length;
        if (eightsCount === 1) {
          cost += 2800;
          steps.push(`第二个7升8，花费 2800 仙玉`);
        } else if (eightsCount === 2) {
          cost += 5600;
          steps.push(`第三个7升8，花费 5600 仙玉`);
        } else if (eightsCount === 3) {
          cost += 22400;
          steps.push(`第四个7升8，花费 22400 仙玉`);
        }
        arr[i]++;
        return;
      }
    }
  };

  while (attrArray.some(num => num < 8)) {
    upgrade(attrArray);
  }

  return { cost, steps };
}
