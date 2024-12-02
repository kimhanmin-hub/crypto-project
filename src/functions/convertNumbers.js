export function convertNumbers(price) {
    const tenThousand = 10000;
    const hundredMillion = 100000000;
    const trillion = 1000000000000;
    
    if (price >= trillion) {
      return `${(price / trillion).toFixed(2).replace(/\.00$/, '')}조원`;
    } else if (price >= hundredMillion) {
      return `${(price / hundredMillion).toFixed(2).replace(/\.00$/, '')}억원`;
    } else if (price >= tenThousand) {
      return `${(price / tenThousand).toFixed(2).replace(/\.00$/, '')}만원`;
    } else {
      return `${price.toLocaleString()}원`;
    }
  }

  