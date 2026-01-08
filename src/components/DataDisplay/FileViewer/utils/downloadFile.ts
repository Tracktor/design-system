const downloadFile = (src: string, filename?: string) => {
  const link = document.createElement("a");

  link.href = src;
  link.download = filename || src.split("/").pop() || "file";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  document.body.appendChild(link);

  try {
    link.click();
  } catch (_error) {
    window.open(src, "_blank");
  } finally {
    document.body.removeChild(link);
  }
};

export default downloadFile;
