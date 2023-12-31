"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketerMapper_1 = require("./cricketerMapper");
const match_1 = require("./match");
const team_1 = require("./team");
const playersData_1 = require("./playersData");
const score_1 = require("./score");
let team1 = new team_1.Team('RCB');
let team2 = new team_1.Team('CSK');
let match = new match_1.Match(team1, team2);
match.toss();
team1 = match.getBattingTeam();
team2 = match.getBowlingTeam();
let playersArray = playersData_1.playersData.map(player => {
    return cricketerMapper_1.CricketerMapper.toDomain(player);
});
let players = playersArray.slice(0, 11);
team1.addPlayer(players);
team1.setCaptain(players[2]);
team1.setViceCaptain(players[1]);
let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);
team2.setCaptain(players2[5]);
team2.setViceCaptain(players2[1]);
match.setOvers(6);
match.startGame();
match.changeInnings();
match.getWinner();
console.log();
let team1Score = new score_1.Score(team1);
team1Score.getScore();
let team2Score = new score_1.Score(team2);
team2Score.getScore();
