function countOccurrences(arr, num, itemIndex = 0) {
    if (itemIndex === arr.length) {
        return 0;
    }

    let count = (arr[itemIndex] === num) ? 1 : 0;
    
    return count + countOccurrences(arr, num, itemIndex + 1);
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
countOccurrences(numbers, 2);