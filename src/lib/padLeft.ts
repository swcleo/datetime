export function padLeft(str: string | number, length: number): string {
  const s = "" + str;
  return s.length >= length ? s : padLeft("0" + str, length);
}
