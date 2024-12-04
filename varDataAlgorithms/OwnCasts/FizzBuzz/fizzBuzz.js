// write a program that console logs the numbers from 1 to n
// for multiples of 3, it should print "fizz"
// for multiples of 5, print "buzz"
// for multiples of both 3 AND 5, print "fizzbuzz"

const fizzBuzz = (num) => {

    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) { console.log("fizzbuzz"); } // 15 lowest multiple of both 3 & 5
        else if (i % 3 === 0) { console.log("fizz"); }
        else if (i % 5 === 0) { console.log("buzz"); }
        else { console.log(i); }
    }

};


fizzBuzz(15);

module.exports = fizzBuzz;

/*

**using for loop**

// const fizzBuzz = (num) => {

//     for (let i = 1; i <= num; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }

//     }
// };

**using do...while**

const fizzBuzz = (num) => {
    let i = 1;
    do {

        if (i % 3 === 0 && i % 5 === 0) { console.log("fizzbuzz"); }

        else if (i % 3 === 0) { console.log("fizz"); }

        else if (i % 5 === 0) { console.log("buzz"); }

        else { console.log(i); };
        i++;
    } while (i <= num);
};

*/