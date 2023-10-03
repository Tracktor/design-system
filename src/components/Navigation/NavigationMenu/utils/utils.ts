export const sanitizePathname = (pathname: string) => {
  if (pathname[0] === "/") {
    return String(pathname).split("/")[1];
  }

  return String(pathname);
};

export default sanitizePathname;
