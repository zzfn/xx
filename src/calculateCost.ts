export function calculateCost(attributes:string) {
  let cost = 0;
  let attrArray = attributes.split('').map(Number);

  const upgrade = (arr:number[]) => {
    // 全部升到至少6
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 6) {
        arr[i]++;
        return;
      }
    }
    // 升到7
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 7) {
        const sevensCount = arr.filter(num => num >= 7).length;
        if (sevensCount === 2) {
          cost += 5500;
        } else if (sevensCount === 3) {
          cost += 6600;
        }
        arr[i]++;
        return;
      }
    }
    // 升到8
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 8) {
        const eightsCount = arr.filter(num => num >= 8).length;
        if (eightsCount === 1) {
          cost += 2800;
        } else if (eightsCount === 2) {
          cost += 5600;
        } else if (eightsCount === 3) {
          cost += 22400;
        }
        arr[i]++;
        return;
      }
    }
  };

  while (attrArray.some(num => num < 8)) {
    upgrade(attrArray);
  }

  return cost;
}
