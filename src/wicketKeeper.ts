import { Player } from "./player";

export class Wicketkeeper extends Player{

    // private role: string;/

    constructor(id: number , name: string ,role: string , credit: number){
        super(id , name  , credit)
        // this.role = role
    }
    
    // getRole(): string {
    //     return this.role;
    // }

}