export const shuffle = (arr: Array<number>): Array<number> => {
  const newArr = [...arr];
  let j, temp;
  for (let i = newArr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newArr[j];
    newArr[j] = newArr[i];
    newArr[i] = temp;
  }
  return newArr;
};
