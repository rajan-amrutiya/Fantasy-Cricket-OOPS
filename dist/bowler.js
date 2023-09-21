"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bowler = void 0;
const player_1 = require("./player");
class Bowler extends player_1.Player {
    isBowl = false;
    wicket = 0;
    // private role: string;
    constructor(id, name, role, credit) {
        super(id, name, credit);
        // this.role = role
    }
    // getRole(): string {
    //     return this.role;
    // }
    addWickets() {
        this.wicket += 1;
    }
    getWicket() {
        return this.wicket;
    }
    getIsBowl() {
        return this.isBowl;
    }
    setIsBowl() {
        this.isBowl = true;
    }
}
exports.Bowler = Bowler;
