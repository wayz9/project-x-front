export const toCommaSeparate = (array, key) => {
  return array.length > 0
    ? array
        .map((i) => i[key])
        .toString()
        .replaceAll(',', ', ')
    : 'None'
}
