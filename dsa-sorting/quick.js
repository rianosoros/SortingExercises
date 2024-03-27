/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/


function quickSort(arr, l = 0, r = arr.length - 1) {
    if (left < right) {
    let pivotIdx = pivot(arr, l, r);
        quickSort(arr, l, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, r);
    }
    return arr;
}

module.exports = pivot, quickSort;