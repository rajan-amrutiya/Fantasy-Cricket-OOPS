import { Player } from "./player";

export class Bowler extends Player{
    private isBowl: boolean = false;
    private wicket: number = 0;
    // private role: string;

    constructor(id: number , name: string ,role: string , credit: number){
        super(id , name  , credit)
        // this.role = role
    }
    
    // getRole(): string {
    //     return this.role;
    // }

    addWickets(): void {
        this.wicket += 1;
    }
    getWicket(): number {
        return this.wicket;
    }
    getIsBowl(): boolean {
        return this.isBowl;
    }
    setIsBowl(): void {
        this.isBowl = true;
    }
}