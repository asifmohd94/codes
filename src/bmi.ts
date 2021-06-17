export function bmi(weight: number, height: number): string {
    let bmi = weight / (height * height);
    let ans = "";
    if (bmi <= 18.5) {
        ans = "Underweight"
    } else if (bmi <= 25.0 && bmi > 18.5) {
        ans = "Normal"
    } else if (bmi <= 30.0 && bmi > 25.0) {
        ans = "Overweight";
    } else { ans = "Obese" }
    return ans;
}