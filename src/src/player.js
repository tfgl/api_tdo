const Inventaire = require("./inventaire.js");
const Map = require("./map.js");

class Player {
    constructor(partie) {
        this.partie = partie;
        this.tile = partie.get_map().get_base();
        this.e = 3;
        this.f = 2;
        this.a = 2;
        this.p = 1;

        this.hp = 10;
        this.lvl = 8;

        this.head = null;
        this.corps = null;
        this.arme = null;
        this.armedst = null;
        this.bouclier = null;

        this.inventaire = new Inventaire();

        let [x, y] = this.partie.get_map().centerToTopLeft(0, 0);
        this.x = x;
        this.y = y;
    }

    lvlUp() {
        this.lvl = this.e + this.f + this.a + this.p;
    }

    move(dir) {
        let map = this.partie.get_map();
        let dirs = {
            'n': [0, -1],
            'e': [1,  0],
            's': [0,  1],
            'o': [-1, 0],
        };

        let x = dirs[dir][0] + this.x;
        let y = dirs[dir][1] + this.y;

        if( map.isInSide(x, y) && this.partie.isFree(x, y) ) {
            this.x = x;
            this.y = y;
        }

        return map.get_tile(this.x, this.y);
    }

    /*
        27 const move = (jId, pId, dir) => {
   26     // next case
   25     // case vide ou base ?
   24     //  oui: deplace j renvoie event
   23     //  non: renvoie err
   22     let partieModel = require("../models/partie.js");
   21     let j = joueurList[pId][jId]
   20     let [x, y] = j.coo;
   19     let tile = partieModel.getGrille(pId, x, y);
   18
   17     x += dirToCoo[dir][0];
   16     y += dirToCoo[dir][1];
  15
  14     if( partieModel.inMap(pId, x, y) ) {
   13         tile = partieModel.getGrille(pId, x, y);
   12         if( tile.players.length == 0 || tile.type == 'base') {
   11             j.coo = [x, y];
  10             tile.players.push(jId);
   9             console.log('TILE');
   8             console.log(tile);
   7             console.log(partieModel.getGrille(pId, 0, 0));
    6         }
    5     }
    4
    3     console.log(`${dir}: ${dirToCoo[dir]}, j: ${j.coo}`)
    2     console.log(`..............`)
    1
  100     return tile;
    1 };

    */

    ramasser(itemId) {
        //TODO
        //this.partie.
    }

    get_stats() {
        return {
            e: this.e,
            f: this.f,
            a: this.a,
            p: this.p,
            hp: this.hp,
            lvl: this.lvl,
        };
    }

    get_equipement() {
        return {
            head: this.head,
            corps: this.corps,
            arme: this.arme,
            armedst: this.armedst,
            bouclier: this.bouclier,
        };
    }

    get_inventaire() {
        return this.inventaire;
    }

}

module.exports = Player;
