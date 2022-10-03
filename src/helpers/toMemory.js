export const toMemory = (bytes, decimals = 2) => {
  if (!+bytes) return '0 MB'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
