export const choice = (count, arrayOfKeywords) => {
  if (count > 1) return count + ' ' + arrayOfKeywords[1]
  return count + ' ' + arrayOfKeywords[0]
}
