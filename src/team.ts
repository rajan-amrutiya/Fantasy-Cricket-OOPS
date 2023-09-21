import { Batsman } from "./batsman";
import { Bowler } from "./bowler";
import { Wicketkeeper } from "./wicketKeeper";



export class Team {
    private players: (Batsman | Bowler | Wicketkeeper)[];

    private wickets: number = 0;
    private over: number = 0;
    private balls: number = 0;

    static allowedBatsman: number = 5;
    static allowedBowler: number = 5;
    static allowedWicketKeeper: number = 1;

    constructor(public name: string) {
        this.validateName();
        this.players = [];
    }

    getName(): string {
        return this.name;
    }

    validateName(): void {
        if (this.name == "" || this.name == " ") {
            throw new Error("should not be blank");
        }
    }

    getTeam(): Team {
        return this;
    }

    getPlayers(): (Batsman | Bowler | Wicketkeeper)[] {
        return this.players;
    }

    addPlayer(players: (Batsman | Bowler | Wicketkeeper)[]): void {
        this.validatePlayers(players);
        this.validatePlayerRole(players);
        this.players = players;
    }


    validatePlayers(players: (Batsman | Bowler | Wicketkeeper)[]): void {

        if (players.length != 11) {
            throw new Error("Please add 11 players");
        }
        let totalCredit = 0;
        players.map(player => {
            totalCredit += player.getCredit();
        });
        
        if (totalCredit > 100) {
            throw new Error("Please add players that have total credits below 100");
        }
    }

    removePlayer(id: number): void {
        let playerIndex = this.players.findIndex(player => player.getId() == id);
        if (playerIndex == -1) {
            throw new Error('(Batsman | Bowler| Wicketkeeper) is not in team');
        }
        this.players.splice(playerIndex, 1);
    }

    validatePlayerRole(players: (Batsman | Bowler | Wicketkeeper)[]): void {
        let batsmanCount = players.filter(player =>  player instanceof Batsman).length;
        let bowlerCount = players.filter(player => player instanceof Bowler).length;
        let wicketKeeperCount = players.filter(player =>  player instanceof  Wicketkeeper).length;
        if (batsmanCount != Team.allowedBatsman) {
            throw new Error("Batsman Exceeded");
        }
        if (bowlerCount != Team.allowedBowler) {
            throw new Error("Bowler Exceeded");
        }
        if (wicketKeeperCount != Team.allowedWicketKeeper) {
            throw new Error("WicketKeeper Exceeded");
        }
    }

    setCaptain(player: (Batsman | Bowler| Wicketkeeper)): void {
        if (player.getIsViceCaptain()) {
            throw new Error("This player is already selected for captain or vice captain");
        }
        player.setIsCaptain();
    }

    setViceCaptain(player: (Batsman | Bowler | Wicketkeeper)): void {
        if (player.getIsCaptain()) {
            throw new Error("This player is already selected for captain or vice captain");
        }
        player.setIsViceCaptain();
    }

    getCaptain(): (Batsman | Bowler | Wicketkeeper) {
        return this.players.filter(player => player.getIsCaptain() == true)[0];
    }

    getViceCaptain(): (Batsman | Bowler| Wicketkeeper) {
        return this.players.filter(player => player.getIsViceCaptain() == true)[0];
    }

    getRuns(): number {
        return  this.players.reduce((runs: number, player: (Batsman | Bowler| Wicketkeeper)) => {
            return runs + player.getRuns();
        }, 0);
    }
    getFantasyPoints(): number {
        return this.players.reduce((points: number, player: (Batsman | Bowler| Wicketkeeper)) => {
            return points + player.getFantasyPoints();
        }, 0);
    }

    getBatsman(): (Batsman | Bowler | Wicketkeeper) {

        return this.players.filter(player => {
            if (player.getIsBat() == false) {
                return player;
            }
        })[0];

    }
    getBowler() : Bowler | null{
        let bowler =  this.players.filter(player => {
            if (player instanceof Bowler && !player.getIsBowl()) {
                return player;
            }
        })[0];
        if(bowler instanceof Bowler ){
            return bowler
        }
        return null

    }
    addWickets(): void {
        this.wickets += 1;
    }
    getWickets(): number {
        return this.wickets;
    }
    addOvers(): void {
        this.over += 1;
    }
    getOvers(): number {
        return this.over;
    }

    addBalls(): void {
        this.balls += 1;
    }
    getBalls(): number {
        return this.balls;
    }
}
