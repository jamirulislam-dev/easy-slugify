/**
 * Converts a string into a URL-friendly slug.
 * 
 * Features:
 * - Lowercase conversion: Turns all uppercase letters to lowercase.
 * - Whitespace trimming: Removes accidental spaces at the very beginning or end of the string.
 * - Special character removal: Strips out punctuation (like !, ?, ., ,, @).
 * - Space replacement: Replaces spaces between words with a hyphen (-).
 * - Duplicate space handling: Ensures that if there are two spaces together (e.g., "hello  world"), it only outputs one hyphen ("hello-world", not "hello--world").
 * 
 * @param str - The input string to slugify
 * @returns The slugified string
 * @throws {TypeError} If the input is not a string
 */
export function slugify(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str
    .trim()
    .toLowerCase()
    // Remove special characters/punctuation (like !, ?, ., ,, @, etc.)
    // We match and remove everything that is not an alphanumeric character, space, or hyphen.
    // This covers standard punctuation and symbols.
    .replace(/[^a-z0-9\s-]/g, '')
    // Replace spaces (including multiple consecutive ones) with a single hyphen
    .replace(/\s+/g, '-')
    // Clean up any duplicate hyphens (e.g. if the original text had spaces and hyphens together)
    .replace(/-+/g, '-')
    // Clean up leading/trailing hyphens for a clean slug
    .replace(/^-+|-+$/g, '');
}
