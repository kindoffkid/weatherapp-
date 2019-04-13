let x = new Date()
let weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thurday',
  'Friday',
  'Saturday'
]

export function get_current_day() { 
  return weekday[x.getDay()]
}
export function get_current_time(timestamp)
{
  return new Date(timestamp)
    .toLocaleString(undefined,
      {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }
    )
}

export function get_future_day(timestamp) { 
  return new Date(timestamp * 1000).toLocaleString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}
export function futureDay(timestamp) {
  return new Date(timestamp * 1000).toLocaleString(undefined, {
    weekday: 'long',
  })
}

export function futureDayMonth(timestamp) {
  return new Date(timestamp * 1000).toLocaleString(undefined, {
    day: 'numeric',
    month: 'long'
  })
}
