export const getRandomKey = (): string =>
  'key_' +
  Math.random()
    .toString(16)
    .slice(2);
