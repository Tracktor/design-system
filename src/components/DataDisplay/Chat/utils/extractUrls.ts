const URL_REGEX = /https?:\/\/\S+/g;

/**
 * Extract all URLs (http/https) from a text string.
 */
export const extractUrls = (body: string): string[] => body.match(URL_REGEX) || [];
