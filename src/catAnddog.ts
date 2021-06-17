function catYear(humanYears) {

    let catYears = 0;
    let dogYears = 0;
    let arr = [];
    if (humanYears > 0) {
        let i = 1;
        while (i <= humanYears) {
            if (i == 1) {
                catYears += 15;
                dogYears += 15
            } else if (i == 2) {
                dogYears += 9;
                catYears += 9;
            } else {
                dogYears += 5;
                catYears += 4;
            }
            i++;
        }
    }

    return [humanYears, catYears, dogYears];
}