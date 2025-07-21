export function calculateAge(
  d: number,
  m: number,
  y: number,
): [number, number, number] {
  const birthDate = new Date(y, m - 1, d);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  // Adjust if the current day is before the birth day
  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += lastMonth.getDate();
  }

  // Adjust if the current month is before the birth month
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return [days, months, years];
}

// Additional utility functions for more age calculations
export function calculateAgeInDays(d: number, m: number, y: number): number {
  const birthDate = new Date(y, m - 1, d);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - birthDate.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
}

export function calculateAgeInHours(d: number, m: number, y: number): number {
  const birthDate = new Date(y, m - 1, d);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - birthDate.getTime();
  return Math.floor(timeDiff / (1000 * 3600));
}

export function getNextBirthday(d: number, m: number): Date {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let nextBirthday = new Date(currentYear, m - 1, d);
  
  // If birthday has passed this year, calculate for next year
  if (nextBirthday < currentDate) {
    nextBirthday = new Date(currentYear + 1, m - 1, d);
  }
  
  return nextBirthday;
}
