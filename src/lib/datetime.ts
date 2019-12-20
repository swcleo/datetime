import { getTimeOfTimezone } from "./getTimeOfTimezone";
import { padLeft } from "./padLeft";

export class DateTime implements IDateTime {
  private date: Date;

  private timezoneOffset: number;

  private differenceOfTimezone: number;

  constructor() {
    this.date = new Date();

    this.timezoneOffset = this.date.getTimezoneOffset();

    this.differenceOfTimezone = 0;
  }

  public getTimezoneOffset(): number {
    return this.timezoneOffset;
  }

  public setTimezoneOffset(timezoneOffset: number) {
    const timeOfTimezone = getTimeOfTimezone(timezoneOffset);

    this.differenceOfTimezone =
      this.differenceOfTimezone + this.date.getTime() - timeOfTimezone;

    this.date.setTime(timeOfTimezone);

    this.timezoneOffset = timezoneOffset;
  }

  public getTime(): number {
    return this.date.getTime() + this.differenceOfTimezone;
  }

  public setTime(timestamp: number) {
    this.date.setTime(timestamp - this.differenceOfTimezone);
  }

  public toObject(): IDateTimeObject {
    return {
      day: this.date.getDate(),
      hours: this.date.getHours(),
      minutes: this.date.getMinutes(),
      month: this.date.getMonth() + 1,
      seconds: this.date.getSeconds(),
      year: this.date.getFullYear()
    };
  }

  public toString(): string {
    const { year, month, day, hours, minutes, seconds } = this.toObject();

    const y = year;
    const m = padLeft(month, 2);
    const d = padLeft(day, 2);
    const h = padLeft(hours, 2);
    const min = padLeft(minutes, 2);
    const sec = padLeft(seconds, 2);

    return `${y}-${m}-${d} ${h}:${min}:${sec}`;
  }
}
