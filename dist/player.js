"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    id;
    name;
    role;
    credit;
    fantasyPoints = 0;
    constructor(id, name, role, credit) {
        this.id = id;
        this.name = name;
        this.role = role;
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
    getRole() {
        return this.role;
    }
    addFantasyPoints(points) {
        this.fantasyPoints += points;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
}
exports.Player = Player;
