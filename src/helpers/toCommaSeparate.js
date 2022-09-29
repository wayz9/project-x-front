export const toCommaSeparate = (array, key = 'name') => {
  if (!array) return 'None'
  return array.length > 0
    ? array
        .map((i) => i[key])
        .toString()
        .replaceAll(',', ', ')
    : 'None'
}
