import { SortedArray, UnsortedArray } from "./types/gen";

declare module "react-sorting-hooks" {
  export default function quickSort<T>(array: UnsortedArray<T>): SortedArray<T>;
}