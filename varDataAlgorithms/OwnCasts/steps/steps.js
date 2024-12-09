
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