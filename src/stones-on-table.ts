export function solve(stones: string) {
    let count = 0;
    let arr = stones.split("");
    for (let i = 0; i < stones.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            count++;
        }
    }
    return count;
}