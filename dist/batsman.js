"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batsman = void 0;
const player_1 = require("./player");
class Batsman extends player_1.Player {
    // private role: string;
    constructor(id, name, role, credit) {
        super(id, name, credit);
        // this.role = role
    }
}
exports.Batsman = Batsman;
