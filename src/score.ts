import { Team } from "./team";

export class Score {
    constructor(public team: Team) {
    }

    getScore(): void {
        let teamScore = `${this.team.getName()}  -- ${this.team.getRuns()}/${this.team.getWickets()}   --  Balls - ${this.team.getBalls()} -- Fantasy points - ${this.team.getFantasyPoints()}`;
        console.log(teamScore);
        console.log();

        this.team.getPlayers().map((player, index) => {
            console.log('------------------------------------------------------------------');
            console.log
                (`${index + 1}  ${player.getName()} -- runs - ${player.getRuns()} -- balls - ${player.getBalls()} -- wickets - ${player.getWicket()} -- fantasy points - ${player.getFantasyPoints()}`);
        });
        console.log();
        console.log('==========================================================================');
        console.log();

    }

}