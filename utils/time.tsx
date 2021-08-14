export const getDays = (start: string, end: string) => {
  let date1 = new Date(start);
  let date2 = new Date(end);
  let Difference_In_Time = date2.getTime() - date1.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  return Difference_In_Days;
};
