export const ensureNumberOnly = (string) => {
  return string.replace(/[^0-9]/g, '')
}
