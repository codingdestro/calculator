export function calculateAge(
  d: number,
  m: number,
  y: number,
): { days: number; months: number; years: number } {
  const dob = new Date(y, m, d);
  let [mm, dd, yy] = new Date()
    .toLocaleDateString()
    .split("/")
    .map((ele) => parseInt(ele));

  if (dd < dob.getDate()) {
    dd = dd + new Date(yy, mm, 0).getDate();
    mm -= 1;
  }

  if (mm < dob.getMonth()) {
    mm += 12;
    yy -= 1;
  }

  const days = dd - dob.getDate();
  const months = mm - dob.getMonth();
  const years = yy - dob.getFullYear();
  return { days, months, years };
}
