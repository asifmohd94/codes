export function threeInOne(arr: []) {
    var ans = new Array();
    let sum = 0;
    for (let i = 0; i < arr.length; i = i + 3) {
        var temp = arr.slice(i, i + 3);
        sum = 0;
        for (let x of temp) {
            sum += x;
        }
        ans.push(sum);
    }
    return ans;
}