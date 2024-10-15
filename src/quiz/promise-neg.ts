function negsPerRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (rowIdx >= arr.length) {
            reject('Row index out of bounds');
            return;
        }
        setTimeout(() => {
            arr[rowIdx].filter((e) => e < 0).length > 0 
                ? resolve(`Found Evidence : ${arr[rowIdx]}`) 
                : reject(`No negative numbers found in row ${rowIdx}`);
        }, 0);
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const negsPerRowPromises: Promise<string>[] = [];

for (let x = 0; x < array2D_3.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D_3, x));
}

Promise.any(negsPerRowPromises)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(`Error Msg: ${error}`);
    });
