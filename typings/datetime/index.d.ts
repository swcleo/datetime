interface IDateTimeObject {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface IDateTime {
  toString(): string;
  getTimezoneOffset(): number;
  setTimezoneOffset(timezoneOffset: number): void;
  getTime(): number;
  setTime(timestamp: number): void;
  toObject(): IDateTimeObject;
  toString(): string;
}
