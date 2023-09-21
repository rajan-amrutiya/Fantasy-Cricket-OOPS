import { Wicketkeeper } from "./wicketKeeper";


export class WicketkeeperMapper{
    static toDomain(player : any){
        return new Wicketkeeper( player.id , player.name , player.playingRole , player.credit)
    }
}