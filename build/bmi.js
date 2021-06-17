"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmi = void 0;
function bmi(weight, height) {
    var bmi = weight / (height * height);
    var ans = "";
    if (bmi <= 18.5) {
        ans = "Underweight";
    }
    else if (bmi <= 25.0 && bmi > 18.5) {
        ans = "Normal";
    }
    else if (bmi <= 30.0 && bmi > 25.0) {
        ans = "Overweight";
    }
    else {
        ans = "Obese";
    }
    return ans;
}
exports.bmi = bmi;
