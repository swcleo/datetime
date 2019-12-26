import { DateTime } from "../src/lib/datetime";

describe("DateTime(預設時區+8)", () => {
  let dateTime: DateTime;

  const mockDate = new Date(2019, 6, 26, 8, 30, 12);
  const mockTimeString = "2019-07-26 08:30:12";
  const mockTS = mockDate.getTime(); // 1564126212000
  const mockZone = mockDate.getTimezoneOffset();

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(mockDate);
    dateTime = new DateTime();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("#toString 應該回傳當下時間字串", () => {
    expect(dateTime.toString()).toBe(mockTimeString);
  });

  it("#getTimezoneOffset 應該取得格林威治时间和本地时间之间的时差", () => {
    expect(dateTime.getTimezoneOffset()).toBe(mockZone);
  });

  it("#getTime 應該取得時間戳記", () => {
    expect(dateTime.getTime()).toBe(mockTS);
  });

  it("#setTime 應該變更時區戳記", () => {
    const timestamp = 1564111825000;
    const zone = -480;
    const tsString = "2019-07-26 11:30:25";
    dateTime.setTimezoneOffset(zone);
    dateTime.setTime(timestamp);
    expect(dateTime.getTime()).toBe(timestamp);
    expect(dateTime.toString()).toBe(tsString);
  });

  it("#toObject 應該取得DateTime的Object", () => {
    const { year, month, day, hours, minutes, seconds } = dateTime.toObject();

    expect(year).toBe(2019);
    expect(month).toBe(7);
    expect(day).toBe(26);
    expect(hours).toBe(8);
    expect(minutes).toBe(30);
    expect(seconds).toBe(12);
  });

  it("#setTimezoneOffset 應該變更成美東時區差及時間", () => {
    const NorthAmericanEasternTimestamp = 1564111825000;
    const NorthAmericanEasternTimeZone = 240;
    const NorthAmericanTimeString = "2019-07-25 23:30:25";
    dateTime.setTimezoneOffset(NorthAmericanEasternTimeZone);
    dateTime.setTime(NorthAmericanEasternTimestamp);
    expect(dateTime.getTimezoneOffset()).toBe(NorthAmericanEasternTimeZone);
    expect(dateTime.getTime()).toBe(NorthAmericanEasternTimestamp);
    expect(dateTime.toString()).toBe(NorthAmericanTimeString);
  });

  it("#setTimezoneOffset 應該變更成日本時區差及時間", () => {
    const TokyoTimestamp = 1564111825000;
    const TokyoTimeZone = -540;
    const TokyoTimeString = "2019-07-26 12:30:25";
    dateTime.setTimezoneOffset(TokyoTimeZone);

    dateTime.setTime(TokyoTimestamp);
    expect(dateTime.getTime()).toBe(TokyoTimestamp);
    expect(dateTime.getTimezoneOffset()).toBe(TokyoTimeZone);
    expect(dateTime.toString()).toBe(TokyoTimeString);
  });
});
