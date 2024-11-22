export const getRandomPhotoSize = (width: number, minHeight: number, maxHeight: number) => {
  const getRandomHeight = () => Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
  return {
    width,
    height: getRandomHeight(),
  };
};
