function binarySearch(arr = [], searchNum, start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === searchNum) {
        return arr[middle];
    } else if (arr[middle] > searchNum) {
        return binarySearch(arr, searchNum, start, middle - 1);
    } else {
        return binarySearch(arr, searchNum, start + 1, end);
    }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
binarySearch(sortedArray, 9);
binarySearch(sortedArray, 10);