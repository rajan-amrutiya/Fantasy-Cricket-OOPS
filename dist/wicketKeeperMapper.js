"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WicketkeeperMapper = void 0;
const wicketKeeper_1 = require("./wicketKeeper");
class WicketkeeperMapper {
    static toDomain(player) {
        return new wicketKeeper_1.Wicketkeeper(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.WicketkeeperMapper = WicketkeeperMapper;
