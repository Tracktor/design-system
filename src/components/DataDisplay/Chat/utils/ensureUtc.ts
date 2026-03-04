/**
 * Append "Z" suffix to a date string if it has no timezone indicator, ensuring it is parsed as UTC.
 */
const ensureUtc = (date: string): string => (date.endsWith("Z") || /[+-]\d{2}:\d{2}$/.test(date) ? date : `${date}Z`);

export default ensureUtc;
