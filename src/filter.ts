export function filterLongWords(sentence: string, n: number): any[] {
    let arr1 = [];
    let arr = sentence.split(" ");

    let ans = arr.map(n => {
        return n.length;
    })
    let i = 0;
    while (i < ans.length) {
        if (ans[i] > n) {
            arr1.push(arr[i]);
        }
        i++;
    }
    return arr1;
}