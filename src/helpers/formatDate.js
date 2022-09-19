export const formatDate = (date) =>
  date.substring(0, 10).split(/(-)/).reverse().join('').replaceAll('-', '.')
