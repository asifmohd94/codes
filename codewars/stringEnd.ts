export function solution(str: string, ending: string): boolean {
    let string = str.substring(str.length - ending.length);
    if (string === ending) {
        return true;
    }
    return false;
}