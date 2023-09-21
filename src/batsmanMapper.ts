import { Batsman } from "./batsman";

export class BatsmanMapper{
    static toDomain(player : any){
        return new Batsman( player.id , player.name , player.playingRole , player.credit)
    }
}