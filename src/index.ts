import quickSort from "./quickSort";
import heapSort from "./heapSort";

let arr = [1, 5, 3, 4, 2, 5];

console.timeLog();
console.log(quickSort(arr));
console.timeEnd();

console.timeLog();
console.log(heapSort(arr));
console.timeEnd();