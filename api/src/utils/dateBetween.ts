export const dateBetween = (date: string) => {
  const today = new Date(date);
  const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  return { startDate, endDate };
};