export default function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every((element) => typeof element === 'string')) {
      resolve(arr.sort());
    } else {
      reject('Error: Not all elements are strings!');
    }
  });
}
