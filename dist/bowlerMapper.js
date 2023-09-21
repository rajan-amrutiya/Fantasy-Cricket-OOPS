"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlerMapper = void 0;
const bowler_1 = require("./bowler");
class BowlerMapper {
    static toDomain(player) {
        return new bowler_1.Bowler(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.BowlerMapper = BowlerMapper;
