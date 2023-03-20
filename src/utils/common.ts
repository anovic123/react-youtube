import { useTranslation } from "react-i18next";

export const convertDuration = (total: number) => {
  const minutes = total % 60;
  const hours = Math.floor(total / 60);

  return `${hours}h ${minutes}m`;
};

export const convertViews = (total: number) => {
  const { t } = useTranslation();
  const units = ['', t("utils.util1"), t("utils.util2"), t("utils.util3"), t("utils.util4")];
  let i = 0;
  if (isNaN(total)) {
    return '0 ' + units[i];
  }
  while (total >= 1000 && i < units.length - 1) {
    total /= 1000;
    i++;
  }
  return total.toFixed(2) + ' ' + units[i];
}

export const titleSlice = ( title: any) => {
  const isFull = title.length < 55;
  const fullText = !isFull ? `${title.slice(0, 55)}...` : title;

  return fullText
}
