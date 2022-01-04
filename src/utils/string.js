export function prevZero(val, fill = '0', len = 3) {
    return val.toString().padStart(len, fill)
}
  