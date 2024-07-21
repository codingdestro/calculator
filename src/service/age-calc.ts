export function calculateAge(
  d: number,
  m: number,
  y: number,
): [number, number, number] {
  const dob = new Date(y, m - 1, d);
  const date = new Date();

  let dd = date.getDate();
  let mm = date.getMonth();
  let yy = date.getFullYear();

  if (dd < dob.getDate()) {
    dd = dd + new Date(yy, mm, 0).getDate();
  }

  if (mm < dob.getMonth()) {
    mm += 12;
    yy -= 1;
  }

  const days = dd - dob.getDate();
  const months = mm - dob.getMonth();
  const years = yy - dob.getFullYear();
  return [days, months, years];
}
