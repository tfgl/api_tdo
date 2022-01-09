const Map = require("./map");
const Player = require("./player");
const Event = require("./event");

class Partie {
    static parties = [];

    static create() {
        let pId = Partie.parties.length;
        Partie.parties.push( new Partie() );

        return pId;
    }

    static join(pId) {
        Partie.parties[pId].addPlayer();
    }

    static getPartie(pId) {
        return Partie.parties[pId];
    }

    constructor() {
        Event.initEvent();
        this.map = new Map(200, 200, this);
        this.players = [];
    }

    addPlayer() {
        let jId = this.players.length;
        this.players.push(new Player( this ));

        return jId;
    }

    isFree(x, y) {
        for(let i=0; this.players[i]; i++) {
            let player = this.players[i];
            if( player.x == x && player.y == y )
                return false;
        }

        return true;
    }

    get_player(jId) {
        let player = this.players[jId];
        if( !player )
            throw `[err Partie:get_player] player ${jId} does not exist. Has he join the join the party ?`;
        return player;
    }

    get_map() {
        return this.map;
    }
}

module.exports = Partie;
