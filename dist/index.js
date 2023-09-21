"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("./match");
const team_1 = require("./team");
const playersData_1 = require("./playersData");
const score_1 = require("./score");
const game_1 = require("./game");
const batsmanMapper_1 = require("./batsmanMapper");
const bowlerMapper_1 = require("./bowlerMapper");
const wicketKeeperMapper_1 = require("./wicketKeeperMapper");
let team1 = new team_1.Team('RCB');
let team2 = new team_1.Team('CSK');
let match = new match_1.Match(team1, team2);
match.toss();
team1 = match.getBattingTeam();
team2 = match.getBowlingTeam();
let playersArray = playersData_1.playersData.map(player => {
    if (player.playingRole == "Batsman") {
        return batsmanMapper_1.BatsmanMapper.toDomain(player);
    }
    else if (player.playingRole == "Bowler") {
        return bowlerMapper_1.BowlerMapper.toDomain(player);
    }
    else {
        return wicketKeeperMapper_1.WicketkeeperMapper.toDomain(player);
    }
});
let players = playersArray.slice(0, 11);
team1.addPlayer(players);
team1.setCaptain(players[2]);
team1.setViceCaptain(players[1]);
let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);
team2.setCaptain(players2[5]);
team2.setViceCaptain(players2[1]);
let firstInning = new game_1.Game(team1, team2);
match.startGame(firstInning);
let secondInning = new game_1.Game(team2, team1);
match.startGame(secondInning);
match.getWinner();
console.log();
let team1Score = new score_1.Score(team1);
team1Score.getScore();
let team2Score = new score_1.Score(team2);
team2Score.getScore();
