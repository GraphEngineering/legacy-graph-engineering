export default <T>(array: T[], separator: T): T[] =>
  array.reduce(
    (previous, current, index) =>
      index === 0 ? [current] : [...previous, separator, current],
    [] as T[]
  );
