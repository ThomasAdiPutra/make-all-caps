export default function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    const capitalizedArray = arr.map((element) => {
      if (typeof element === 'string') {
        return element.toUpperCase();
      }
      return reject('Error: Not all elements are strings!');
    });
    resolve(capitalizedArray);
  });
}
