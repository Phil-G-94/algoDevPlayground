/*

write a function that acceepts a positive number N
the function should console log a pyramid shape
with N levels using the # character.
each level of the pyramid that isn't the *last* should have spaces on both the left and right sides

*/

const pyramid = (n) => {

    // identify midpoint in row
    // only ever dependent on `n`, so will not change / is not dependent on loop
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {

        let level = "";

        for (let col = 0; col < 2 * n - 1; col++) {

            if (midpoint - row <= col && midpoint + row >= col) {
                // if both conditions are true, we are in a column that should have "#"
                level += "#";
            } else {
                // otherwise we are not, and it should have " "
                level += " ";
            }
        }

        console.log(level);
    }
};

pyramid(3);

module.exports = pyramid;

/*

// prints an equal amount of columns for each row

   for (let row = 0; row < n; row++) {

        let level = "";

        console.log("row = " + row);

        for (let col = 0; col <= n + 2; col++) {

            console.log("col = " + col);
        }

    }

    PRINTS

row = 0
col = 0
col = 1
col = 2
col = 3
col = 4
col = 5
row = 1
col = 0
col = 1
col = 2
col = 3
col = 4
col = 5
row = 2
col = 0
col = 1
col = 2
col = 3
col = 4
col = 5

*/