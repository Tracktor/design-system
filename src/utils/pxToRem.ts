/**
 * Convert px to rem
 * @param size
 * @param htmlFontSize
 * @param fontSize
 */
export const pxToRem = (size: number, htmlFontSize = 16, fontSize = 14) => {
  const coefficient = fontSize / 14;

  return `${(size / htmlFontSize) * coefficient}rem`;
};

export default pxToRem;
