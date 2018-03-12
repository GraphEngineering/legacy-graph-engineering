export const intersperse = <T>(array: T[], separator: T): T[] =>
  array.reduce(
    (arrayWithSeparators, value, index) =>
      index === 0 ? [value] : [...arrayWithSeparators, separator, value],
    [] as T[]
  );
