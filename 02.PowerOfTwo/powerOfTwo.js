/**
 * Power of Two
 *
 * Given an integer, write a function to determine if it is a power of two.
 */
function powerOfTwo(num) {
    if (Math.sqrt(num) % 1 == 0) {
        console.log(`${num} is power of 2`);
    } else {
        console.log(`${num} is not power of 2`);
    }
}

powerOfTwo(14);
powerOfTwo(16);