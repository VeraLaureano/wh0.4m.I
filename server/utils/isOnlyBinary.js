export const isOnlyBinary = (str) => {
  const regex = /^[01]+$/;

  return regex.test(str);
}