/**
 * Check if a given URL is valid
 * @param url
 */
export const isValidUrl = (url?: string | null) => {
  if (!url) {
    return false;
  }

  try {
    const parsedUrl = new URL(url);
    return Boolean(parsedUrl.protocol);
  } catch (_error) {
    return false;
  }
};

export default isValidUrl;
