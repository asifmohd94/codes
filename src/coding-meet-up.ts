export function countDevelopers(list: any[]): number {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].language == "JavaScript" && list[i].continent == "Europe") {
            count++;
        }
    }
    return count;
}