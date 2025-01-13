// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// the last number  of any spiral is n ^ 2

const matrix = (n) => {

    const results = Array.from({ length: n }, () => []);

    let counter = 1;

    let startRow = 0;
    let endRow = n - 1;

    let startCol = 0;
    let endCol = n - 1;


    while (startRow <= endRow && startCol <= endCol) {

        // top row

        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        }

        // increment start row from 0 to 1, since we just completed 0 with the above for loop
        startRow++;

        // right column

        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom row

        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }

        endRow--;

        // left column

        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    return results;

};

console.log(matrix(3));

module.exports = matrix;

/*

meh

const matrix = (n) => {

    let resultsArray = Array.from({ length: n }, () => []);
    let counter = 1;

    let startRow = 0;
    let endRow = n - 1;

    let startCol = 0;
    let endCol = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            resultsArray[startRow][i] = counter;
            counter++;
        }

        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            resultsArray[i][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            resultsArray[endRow][i] = counter;
            counter++;
        }

        endRow--;


        for (let i = endRow; i >= startRow; i--) {
            resultsArray[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return resultsArray;

};

*/