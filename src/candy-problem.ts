export function reverseLetter(str:string):string {


    let str1 = '';
    let arr = str.split("");
    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            str1 += arr[i];
        }
    }
    return str1;
}