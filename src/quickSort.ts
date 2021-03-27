import {
  GenericIndex,
  LeftIndex,
  RightIndex,
  SortedArray,
  UnsortedArray,
} from "../types/gen";

export default function quickSort<T>(array: UnsortedArray<T>): SortedArray<T> {
  function _swap(
    items: UnsortedArray<T>,
    leftIndex: LeftIndex,
    rightIndex: RightIndex
  ) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  function _partition(
    items: UnsortedArray<T>,
    left: LeftIndex,
    right: RightIndex
  ) {
    let pivot = items[Math.floor((right + left) / 2)],
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        _swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function _quickSort(
    items: UnsortedArray<T>,
    left: LeftIndex,
    right: RightIndex
  ) {
    let index: GenericIndex;
    if (items.length > 1) {
      index = _partition(items, left, right);
      if (left < index - 1) {
        _quickSort(items, left, index - 1);
      }
      if (index < right) {
        _quickSort(items, index, right);
      }
    }
    return items;
  }

  let sortedArray: SortedArray<T> = _quickSort(array, 0, array.length - 1);
  return sortedArray;
}
