"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shot = exports.shots = void 0;
exports.shots = [
    { name: "Single", point: 1, runs: 1 },
    { name: "Double", point: 2, runs: 2 },
    { name: "Triple", point: 3, runs: 3 },
    { name: "Boundary", point: 5, runs: 4 },
    { name: "Six", point: 8, runs: 6 },
    { name: "DotBall", point: 1, runs: 0 },
    { name: "Wicket", point: 10, runs: 0 },
];
class Shot {
    name;
    point;
    runs;
    constructor(name, point, runs) {
        this.name = name;
        this.point = point;
        this.runs = runs;
    }
    getName() {
        return this.name;
    }
    getPoint() {
        return this.point;
    }
    getRuns() {
        return this.runs;
    }
}
exports.Shot = Shot;
