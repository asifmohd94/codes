"use strict";
function catYear(humanYears) {
    var catYears = 0;
    var dogYears = 0;
    var arr = [];
    if (humanYears > 0) {
        var i = 1;
        while (i <= humanYears) {
            if (i == 1) {
                catYears += 15;
                dogYears += 15;
            }
            else if (i == 2) {
                dogYears += 9;
                catYears += 9;
            }
            else {
                dogYears += 5;
                catYears += 4;
            }
            i++;
        }
    }
    return [humanYears, catYears, dogYears];
}
