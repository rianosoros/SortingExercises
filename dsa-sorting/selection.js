function selectionSort() {
    let array = this.array;
    let length = array.length;
    let minIndex, temp;

    for (let i = 0; i < length; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;

}

module.exports = selectionSort;