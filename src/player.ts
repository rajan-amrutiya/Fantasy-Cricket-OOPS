import { Batsman } from "./batsman";
import { Shot, shots } from "./shot";
import { ShotMapper } from "./shotsMapper";



export class Player {
    private id: number;
    private name: string;
    private credit: number;
    private runs: number = 0;
    private balls: number = 0;
    private isCaptain: boolean = false;
    private isViceCaptain: boolean = false;
    private fantasyPoints: number = 0;
    private isBat: boolean = false;

    constructor(id: number, name: string , credit: number) {
        this.id = id;
        this.name = name;
        this.credit = credit;
    }

    getName(): string {
        return this.name;
    }
    getPlayer(): Player {
        return this;
    }
    getId(): number {
        return this.id;
    }
    getCredit(): number {
        return this.credit;
    }
    setIsCaptain(): void {
        this.isCaptain = true;
    }
    setIsViceCaptain(): void {
        this.isViceCaptain = true;
    }
    getIsCaptain(): boolean {
        return this.isCaptain;
    }
    getIsViceCaptain(): boolean {
        return this.isViceCaptain;
    }

    static shots(): Shot {
        let random = Math.floor(Math.random() * 7);
        return ShotMapper.toDomain(shots[random]);
    }

    addRuns(runs: number): void {
        this.runs += runs;
    }
    getRuns(): number {
        return this.runs;
    }
    addFantasyPoints(points: number): void {
        this.fantasyPoints += points;
    }
    getFantasyPoints(): number {
        return this.fantasyPoints;
    }
    addBalls(): void {
        this.balls += 1;
    }
    getBalls(): number {
        return this.balls;
    }
    setIsBat(): void {
        this.isBat = true;
    }
    getIsBat(): boolean {
        return this.isBat;
    }
}
