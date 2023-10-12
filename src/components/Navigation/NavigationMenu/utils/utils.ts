/**
 * Get first slice of URL
 * @param pathname
 */
export const getFirstSliceOfURL = (pathname: string) => {
  if (pathname[0] === "/") {
    return String(pathname).split("/")[1];
  }

  return String(pathname).split("/")[0];
};

/**
 * Remove slash from the start of the string
 * @param str
 */
export const removeSlashFromStartOfString = (str: string) => {
  if (str[0] === "/") {
    return str.slice(1);
  }

  return str;
};
