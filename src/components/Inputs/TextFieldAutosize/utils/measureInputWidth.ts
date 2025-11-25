const measureInputWidth = (
  input: HTMLInputElement | null,
  value?: unknown,
  defaultValue?: unknown,
  placeholder?: string,
  adornmentWidth = 0,
): number | null => {
  if (!input) {
    return null;
  }

  const styles = window.getComputedStyle(input);
  const font = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  ctx.font = font;

  const text = value?.toString() || defaultValue?.toString() || placeholder?.toString() || " ";

  const textWidth = ctx.measureText(text).width;

  const paddingLeft = parseFloat(styles.paddingLeft);
  const paddingRight = parseFloat(styles.paddingRight);

  return textWidth + paddingLeft + paddingRight + adornmentWidth;
};

export default measureInputWidth;
