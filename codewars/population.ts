export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
        let population = p0;
        let count = 0;
        while (population < p) {
            population = population + population * (percent / 100) + aug;
            count++;
        }
        return count;
    }
}