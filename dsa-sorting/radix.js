function radixSort() {
    const maxNum = Math.max(...array);
    const maxNumLength = maxNum.toString().length;

    for (let i = 0; i < maxNumLength; i++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < array.length; j++) {
            const digit = Math.floor(array[j] / Math.pow(10, i)) % 10;

            buckets[digit].push(array[j]);
        }

        array = [].concat.apply([], buckets);
    }

    return array;
}

module.exports = radixSort;