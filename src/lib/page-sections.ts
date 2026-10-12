export function cleanCopy(value: string) { return value.replace(/\*+/g, '').trim(); }
export function splitDetail(value: string): [string, string] {
  const index = value.indexOf(':');
  return index < 0 ? [cleanCopy(value), ''] : [cleanCopy(value.slice(0, index)), cleanCopy(value.slice(index + 1))];
}
export function parseSteps(value: string): [string, string][] {
  return value.split(/(?:^|\s)\d+\.\s/).filter(s => s.trim()).map(splitDetail);
}
export function parseQuestions(lines: string[]): [string, string][] {
  return lines.filter(line => /^- /.test(line)).map(line => {
    const value = cleanCopy(line.slice(2));
    const index = value.indexOf('?');
    return index < 0 ? [value, ''] : [value.slice(0, index + 1), value.slice(index + 1).trim()];
  });
}