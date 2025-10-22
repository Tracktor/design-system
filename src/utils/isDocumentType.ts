/**
 * Check if a given URL is a document type.
 * @param url
 */
export const isDocumentType = (url?: string | null) => {
  if (!url) {
    return false;
  }

  const documentExtensions = [
    ".csv",
    ".xls",
    ".xlsx",
    ".xlsm",
    ".xlsb",
    ".xltx",
    ".xltm",
    ".ods",
    ".doc",
    ".docx",
    ".pages",
    ".odt",
    ".rtf",
    ".txt",
  ];

  try {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname.toLowerCase();

    return documentExtensions.some((ext) => path.endsWith(ext));
  } catch (_error) {
    return false;
  }
};

export default isDocumentType;
