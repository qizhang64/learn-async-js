function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (rowIdx >= arr.length) {
            reject('Row index out of bounds');
            return;
        }
        setTimeout(() => {
            let sum = 0;
            for (let j = 0; j < arr[rowIdx].length; j++) {
                console.log(`Adding ${arr[rowIdx][j]} to sum`);
                sum += arr[rowIdx][j];
            }
            resolve(sum);
        }, 0);
    });
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rowSumPromises: Promise<number>[] = [];

for (let x = 0; x < array2D_1.length; x++) {
    rowSumPromises.push(sumOfARow(array2D_1, x));
}

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let totalSum = 0;
        rowSums.forEach(rowSum => {
            totalSum += rowSum;
        });
        console.log(`Sum = ${totalSum}`);
    })
    .catch((error) => {
        console.log(`Error Msg: ${error}`);
    });
