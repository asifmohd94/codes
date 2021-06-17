export function areaOrPerimeter(l:number, w:number):number {
    let area = 0;
    if (l == w) {
        area = l * l;
    } else {
        area = 2 * (l + w);
    }
    return area;
};