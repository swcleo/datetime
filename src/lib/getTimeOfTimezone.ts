export function getTimeOfTimezone(changeTimezone: number) {
  const date = new Date();
  const timezoneOffset = date.getTimezoneOffset();

  let time = date.getTime();

  // 當地時間 + 當地時區差 + 轉換的時區差
  time = time + timezoneOffset * 60 * 1000 - changeTimezone * 60 * 1000;

  return time;
}
