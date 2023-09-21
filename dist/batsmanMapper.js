"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatsmanMapper = void 0;
const batsman_1 = require("./batsman");
class BatsmanMapper {
    static toDomain(player) {
        return new batsman_1.Batsman(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.BatsmanMapper = BatsmanMapper;
