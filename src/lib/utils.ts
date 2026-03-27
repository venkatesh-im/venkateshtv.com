/**
 * Format a date to a human-readable string
 * @param date - Date object or ISO string
 * @param options - Intl.DateTimeFormatOptions
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", options).format(d);
}

/**
 * Truncate a string to a maximum length, appending ellipsis if truncated
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation
 */
export function truncate(str: string, maxLength: number = 160): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "...";
}

/**
 * Generate a URL-friendly slug from a string
 * @param str - The string to slugify
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Strip HTML tags from a string
 * @param html - HTML string
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

/**
 * Calculate estimated reading time for content
 * @param content - HTML or plain text content
 */
export function readingTime(content: string): string {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
