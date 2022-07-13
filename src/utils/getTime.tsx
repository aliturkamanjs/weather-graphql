export function showTime() {
  let date = new Date()
  let h: number | string = date.getHours() // 0 - 23
  let m: number | string = date.getMinutes() // 0 - 59
  let session = 'AM'

  if (h == 0) {
    h = 12
  }

  if (h > 12) {
    h = h - 12
    session = 'PM'
  }

  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m

  let time = h + ':' + m + ' : ' + ' ' + session
  setTimeout(showTime, 1000)
  return time
}
