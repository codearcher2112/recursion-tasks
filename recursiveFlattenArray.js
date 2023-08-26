function flattenArray(arr) {
    return arr.reduce((acc, currentItem) => {
        if (Array.isArray(currentItem)) {
            return [...acc, ...flattenArray(currentItem)];
        } else {
            return [...acc, currentItem];
        }
    }, [])
}

const nestedArray = [1, [2, [3, 4], 5], 6];
flattenArray(nestedArray);