import {
  UnsortedArray,
  LeftIndex,
  RightIndex,
  SortedArray,
  ArrayLength,
  GenericIndex,
  MaxIndex,
} from "../types/gen";

export default function heapSort<T>(array: UnsortedArray<T>): SortedArray<T> {
  let array_length: ArrayLength;

  function _heap_root(input: UnsortedArray<T>, i: GenericIndex) {
    let left: LeftIndex = 2 * i + 1;
    let right: RightIndex = 2 * i + 2;
    let max: MaxIndex = i;

    if (left < array_length && input[left] > input[max]) {
      max = left;
    }

    if (right < array_length && input[right] > input[max]) {
      max = right;
    }

    if (max != i) {
      _swap(input, i, max);
      _heap_root(input, max);
    }
  }

  function _swap(
    items: UnsortedArray<T>,
    leftIndex: LeftIndex,
    rightIndex: RightIndex
  ) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  function _heapSort(input: UnsortedArray<T>) {
    array_length = input.length;
    let i: GenericIndex;
    for (i = Math.floor(array_length / 2); i >= 0; i -= 1) {
      _heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
      _swap(input, 0, i);
      array_length--;

      _heap_root(input, 0);
    }
    return input;
  }
  let result = _heapSort(array);
  return result;
}
