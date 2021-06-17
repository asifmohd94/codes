export function largestPairSum(numbers: []): number {
    let largest = -Infinity;
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if (sum > largest) {
                largest = sum;
            }
        }
    }
    return largest;
}