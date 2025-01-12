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

    let resultsArray = Array.from({ length: n }, () => []);
    let counter = 1;

    let startRow = 0;
    let endRow = n - 1;

    let startCol = 0;
    let endCol = n - 1;

    while (startCol <= endCol && startRow <= endRow) {

        // responsible for top row
        for (let i = startCol; i <= endCol; i++) {
            resultsArray[startRow][i] = counter;
            counter++;
        }
        startRow++;
        // resultsArray = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

        // right col
        for (let i = startRow; i <= endRow; i++) {
            resultsArray[i][endCol] = counter;
            counter++;
        }
        endCol--;
        // resultsArray = [ [ 1, 2, 3 ], [ 6, 7, 4 ], [ 9, 8, 5 ] ];

        // bottom row
        for (let i = endCol; i >= startCol; i--) {
            resultsArray[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // resultsArray = [ [ 1, 2, 3 ], [ 10, 9, 4 ], [ 7, 6, 5 ] ]

        // left column
        for (let i = endRow; i >= startRow; i--) {
            resultsArray[i][startCol] = counter;
            counter++;
        }
        startCol++;
        // resultsArray = [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]

    }

    return resultsArray;
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