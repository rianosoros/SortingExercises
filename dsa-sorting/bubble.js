function bubbleSort() {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    
    for (let i = arr.length; i > 0; i--) {
        for (let x = 0; x < i - 1; x++) {
        if (arr[x] > arr[x + 1]) {
            swap(arr, x, x + 1);
        }
        }
    }
    
    return arr;
}

module.exports = bubbleSort;