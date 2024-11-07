export function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  const START_YEAR = 2024;

  return currentYear > START_YEAR
    ? `${START_YEAR} - ${currentYear}`
    : currentYear;
}
