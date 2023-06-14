function count(char, str) {
  let count = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(count("a", "fikrcamp")); // Output: 1
console.log(count("c", "bootcamp")); // Output: 1
console.log(count("o", "fikrcamp coding bootcamp")); // Output: 3
