/**
 * Count Primes
 *
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Example:
 *
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */
function countPrimes(number) {
    let counter = 0;
    let primes = [];

    for (let curentNum = 2; curentNum <= number; curentNum++) {
        for (let i = 1; i <= number; i++) {
            for (let j = 1; j <= number; j++) {
                if (i * j == curentNum) {
                    counter++;
                }
            }
        }
        if (counter <= 2) {
            primes.push(curentNum);
        }
        counter = 0;
    }
    console.log(primes);
}

countPrimes(20);