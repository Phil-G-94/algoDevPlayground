
// write a function that accepts a positive number N
// the function should console log a step shape N levels using the # character
// make sure the step has spaces on the right hand side

// --Examples
// steps(2)
// "# "
// "##"

// steps(3)
// "# "
// "## "
// "###"

/*

const steps = (n) => {

    for (let row = 0; row < n; row++) {
        let stair = "";

        for (let column = 0; column < n; column++) {

            if (column <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
};

*/

const steps = (n, row = 0, stairs = "") => {

    // must assign a default value to the `row` arg in case that value is not passed in with our function call

    /* base cases */

    if (n === row) return;

    if (n === stairs.length) {
        console.log(stairs); // log `stairs`
        return steps(n, row + 1); // increment `row` argument recursively
    };

    // if (stairs.length <= row) {
    //     stairs += "#";
    // } else {
    //     stairs += " ";
    // }

    // shorten above to ternary expression
    const add = stairs.length <= row ? "#" : " ";

    // recursive function call
    steps(n, row, stairs + add);
};

steps(4);

module.exports = steps;

/* FAILS

// prints the required shape but fails the tests...1

const steps = (n) => {

    if (n === 1) console.log("#");
    else {

        for (let i = "#"; i.length <= n; i += "#") {

            console.log(i);
        }
    }

};

*/

/* SUCCEEDS

// ITERATIVE

const steps = (n) => {

    for (let row = 0; row < n; row++) {
        let stair = "";

        for (let column = 0; column < n; column++) {

            if (column <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
};

steps(4);

*/