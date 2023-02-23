export const convertDuration = (total: number) => {
  const minutes = total % 60;
  const hours = Math.floor(total / 60);

  return `${hours}h ${minutes}m`;
};

export const convertViews = (total: number) => {
  const units = ['', 'тыс.', 'млн', 'млрд', 'трлн'];
  let i = 0;
  while (total >= 1000 && i < units.length - 1) {
    total /= 1000;
    i++;
  }
  return total.toFixed(2) + ' ' + units[i];
}

export const titleSlice = ( title: any) => {
  const isFull = title.length < 60;
  const fullText = !isFull ? `${title.slice(0, 60)}...` : title;

  return fullText
}
