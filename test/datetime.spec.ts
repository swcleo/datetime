import { DateTime } from "../src/lib/datetime";

describe("DateTime(預設時區+8)", () => {
  let dateTime: DateTime;

  // Mock; Date; 2019 - 07 - 6; 08; : 30; : 12;
  const mockDate = new Date(2019, 6, 26, 8, 30, 12);
  const mockTimezone = -480;
  const time = mockDate.getTime();

  let spy: jasmine.Spy;

  beforeEach(() => {
    spy = spyOn(Date.prototype, "getTimezoneOffset");
    spy.and.returnValue(mockTimezone);
    jasmine.clock().mockDate(mockDate);
    dateTime = new DateTime();
  });

  afterEach(() => {
    spy.calls.reset();
  });

  it("#toString 應該回傳當下時間字串", () => {
    const TaiwanTimeString = "2019-07-26 08:30:12";
    expect(dateTime.toString()).toBe(TaiwanTimeString);
  });

  it("#getTimezoneOffset 應該取得格林威治时间和本地时间之间的时差", () => {
    expect(dateTime.getTimezoneOffset()).toBe(mockTimezone);
  });

  it("#getTime 應該取得時間戳記", () => {
    expect(dateTime.getTime()).toBe(time);
  });

  it("#setTime 應該變更時區戳記", () => {
    const GreenwichTimestamp = 1564111825000;
    const GreenwichTimeString = "2019-07-26 11:30:25";
    dateTime.setTime(GreenwichTimestamp);
    expect(dateTime.getTime()).toBe(GreenwichTimestamp);
    expect(dateTime.toString()).toBe(GreenwichTimeString);
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
    const NorthAmericanEasternTimeZone = 240;
    const NorthAmericanEasternTimeString = "2019-07-25 20:30:12";
    expect(dateTime.getTime()).toBe(time);
    dateTime.setTimezoneOffset(NorthAmericanEasternTimeZone);
    expect(dateTime.getTimezoneOffset()).toBe(NorthAmericanEasternTimeZone);
    expect(dateTime.getTime()).toBe(time);
    expect(dateTime.toString()).toBe(NorthAmericanEasternTimeString);
  });

  it("#setTimezoneOffset 應該變更成日本時區差及時間", () => {
    const TokyoTimeZone = -540;
    const TokyoTimeString = "2019-07-26 09:30:12";
    expect(dateTime.getTime()).toBe(time);
    dateTime.setTimezoneOffset(TokyoTimeZone);
    expect(dateTime.getTime()).toBe(time);
    expect(dateTime.getTimezoneOffset()).toBe(TokyoTimeZone);
    expect(dateTime.toString()).toBe(TokyoTimeString);
  });

  it("#setTimezoneOffset 應該變更成對應時區差及時間", () => {
    const NorthAmericanEasternTimeZone = 240;
    const NorthAmericanEasternTimeString = "2019-07-25 20:30:12";
    expect(dateTime.getTime()).toBe(time);
    dateTime.setTimezoneOffset(NorthAmericanEasternTimeZone);
    expect(dateTime.getTime()).toBe(time);
    expect(dateTime.getTimezoneOffset()).toBe(NorthAmericanEasternTimeZone);
    expect(dateTime.toString()).toBe(NorthAmericanEasternTimeString);

    const TokyoTimeZone = -540;
    const TokyoTimeString = "2019-07-26 09:30:12";
    expect(dateTime.getTime()).toBe(time);
    dateTime.setTimezoneOffset(TokyoTimeZone);
    expect(dateTime.getTime()).toBe(time);
    expect(dateTime.getTimezoneOffset()).toBe(TokyoTimeZone);
    expect(dateTime.toString()).toBe(TokyoTimeString);
  });

  it("當預設時區(+8)為其他時區(-4)時相關測試都應該正確", () => {
    const NorthAmericanEasternTimeZone = 240;
    const NorthAmericanEasternTimeString = "2019-07-26 08:30:12";
    const TokyoTimeZone = -540;
    const TokyoTimeString = "2019-07-26 21:30:12";

    spy.and.returnValue(NorthAmericanEasternTimeZone);

    const dT = new DateTime();
    expect(dT.getTimezoneOffset()).toBe(NorthAmericanEasternTimeZone);
    expect(dT.toString()).toBe(NorthAmericanEasternTimeString);

    dT.setTimezoneOffset(TokyoTimeZone);
    expect(dT.getTimezoneOffset()).toBe(TokyoTimeZone);
    expect(dT.getTime()).toBe(time);
    expect(dT.toString()).toBe(TokyoTimeString);
  });
});
