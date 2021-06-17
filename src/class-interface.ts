interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
}

export class Square implements IGeometricFigure {
    side: number;
    constructor(abc: number) {
        this.side = abc;
    }
    area(): number {
        return this.side * this.side;
    }
    perimeter(): number {
        return 4 * this.side;
    }
}

export class Circle implements IGeometricFigure {
    radi: number;
    constructor(radi: number) {
        this.radi = radi;
    }
    area(): number {
        return Math.PI * (this.radi * this.radi)
    }
    perimeter(): number {
        return 2 * Math.PI * this.radi
    }
}