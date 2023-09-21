"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const shot_1 = require("./shot");
const shotsMapper_1 = require("./shotsMapper");
class Player {
    id;
    name;
    credit;
    runs = 0;
    balls = 0;
    isCaptain = false;
    isViceCaptain = false;
    fantasyPoints = 0;
    isBat = false;
    constructor(id, name, credit) {
        this.id = id;
        this.name = name;
        this.credit = credit;
    }
    getName() {
        return this.name;
    }
    getPlayer() {
        return this;
    }
    getId() {
        return this.id;
    }
    getCredit() {
        return this.credit;
    }
    setIsCaptain() {
        this.isCaptain = true;
    }
    setIsViceCaptain() {
        this.isViceCaptain = true;
    }
    getIsCaptain() {
        return this.isCaptain;
    }
    getIsViceCaptain() {
        return this.isViceCaptain;
    }
    static shots() {
        let random = Math.floor(Math.random() * 7);
        return shotsMapper_1.ShotMapper.toDomain(shot_1.shots[random]);
    }
    addRuns(runs) {
        this.runs += runs;
    }
    getRuns() {
        return this.runs;
    }
    addFantasyPoints(points) {
        this.fantasyPoints += points;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    addBalls() {
        this.balls += 1;
    }
    getBalls() {
        return this.balls;
    }
    setIsBat() {
        this.isBat = true;
    }
    getIsBat() {
        return this.isBat;
    }
}
exports.Player = Player;
