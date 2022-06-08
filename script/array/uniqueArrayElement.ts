export const uniqueArrayElement = (array: any[]) => {
  const uniqueNewRegion = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });

  return uniqueNewRegion;
};
