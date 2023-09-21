"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
const bowler_1 = require("./bowler");
class Score {
    team;
    constructor(team) {
        this.team = team;
    }
    getScore() {
        let teamScore = `${this.team.getName()}  -- ${this.team.getRuns()}/${this.team.getWickets()}  -- Fantasy points - ${this.team.getFantasyPoints()}`;
        console.log(teamScore);
        console.log();
        this.team.getPlayers().map((player, index) => {
            console.log('------------------------------------------------------------------');
            console.log(`${index + 1}  ${player.getName()} -- runs - ${player.getRuns()} -- balls - ${player.getBalls()} -- wickets - ${player instanceof bowler_1.Bowler ? player.getWicket() : 0} -- fantasy points - ${player.getFantasyPoints()}`);
        });
        console.log();
        console.log('==========================================================================');
        console.log();
    }
}
exports.Score = Score;
