import { Bowler } from "./bowler";

export class BowlerMapper{
    static toDomain(player : any){
        return new Bowler( player.id , player.name , player.playingRole , player.credit)
    }
}