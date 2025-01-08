/*

write a function that acceepts a positive number N
the function should console log a pyramid shape
with N levels using the # character.
each level of the pyramid that isn't the *last* should have spaces on both the left and right sides

*/

const pyramid = (n, row = 0, level = "") => {

    const midpoint = Math.floor((2 * n - 1) / 2);

    if (row === n) return;

    if (level.length === 2 * n - 1) {
        console.log(level);

        return pyramid(n, row + 1);
    }

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        // if both conditions are true, we are in a column that should have "#"
        // once we're past the first row (so row !== 0), it also makes columns on either side of the midpoint = "#"
        // on the third (and final row in this case), it makes all the columns "#"
        level += "#";
    } else {
        // otherwise we are not, and it should have " "
        level += " ";
    }

    pyramid(n, row, level);

};

pyramid(1);

module.exports = pyramid;

/*

ITERATIVE SOLUTION

const pyramid = (n) => {

    // identify midpoint in row
    // only ever dependent on `n`, so will not change / is not dependent on loop
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {

        let level = "";

        for (let col = 0; col < 2 * n - 1; col++) {

            if (midpoint - row <= col && midpoint + row >= col) {
                // if both conditions are true, we are in a column that should have "#"
                // once we're past the first row (so row !== 0), it also makes columns on either side of the midpoint = "#"
                // on the third (and final row in this case), it makes all the columns "#"
                level += "#";
            } else {
                // otherwise we are not, and it should have " "
                level += " ";
            }
        }

        console.log(level);
    }
};


*/