const Inventaire = require("./inventaire.js");
const Entity = require("./entity.js");
const Item = require("./item.js");

class Player extends Entity {
    constructor(partie) {
        super({f:2, a: 2, p: 1, e: 3, hp: 30});
        this.partie = partie;
        this.tile = partie.get_map().get_base();

        this.tete = null;
        this.corps = null;
        this.arme = null;
        this.armedst = null;
        this.bouclier = null;
        this.soins = null;

        this.inventaire = new Inventaire(10);

        let [x, y] = this.partie.get_map().centerToTopLeft(0, 0);
        this.x = x;
        this.y = y;
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

        if( map.isInSide(x, y) && (this.partie.isFree(x, y) || map.get_tile(x, y) == map.get_base() ) ) {
            this.x = x;
            this.y = y;
            map.incRegen();
            if( map.get_tile(x, y) == map.get_base() ) {
                this.updateMaxHp()
                this.hp = this.maxHp;
            }
        }

        this.tile = map.get_tile(this.x, this.y);
        return this.tile;
    }

    equiper(slot) {
        let item = this.inventaire.take(slot);

        // si l'item exist & est equipable
        if( item && item.stats.bodyPart ) {
            let oldPiece = this[item.stats.bodyPart];
            if( oldPiece )
                this.inventaire.add(oldPiece);
            this[item.stats.bodyPart] = item;
        }
        else {
            this.inventaire.add(item);
        }
    }

    get_tile() {
        return this.tile;
    }

    fouiller() {
        return this.tile.get_inventaire();
    }

    drop(slot) {
        let item = this.inventaire.take(slot);
        if(item)
            this.tile.get_realInventaire().add(item);
    }

    ramasser(item) {
        //TODO quantity of item to pick-up
        if( !this.full() ) {
            this.tile.get_realInventaire().destroy(item, 1);
            this.inventaire.add(item);
        }
    }

    combattre() {
        let ennemy = this.tile.ennemy;
        return ennemy;
    }

    closeAttack() {
        let ennemy = this.tile.ennemy;
        let arme = this.arme;

        ennemy.getHit(this.f + arme.f);
    }

    flee() {
        // 10% de base
        let success = (Math.random()*100) - 10;

        // agilite
        success += 9 - this.a;

        // force
        success -= this.f * 2;
        return success >= 0;
    }

    get_equipement() {
        let equipement = {
            tete: this.tete,
            corps: this.corps,
            arme: this.arme,
            armedst: this.armedst,
            bouclier: this.bouclier,
        };
        return equipement;
    }

    get_inventaire() {
        console.log(this.inventaire.get_items())
        let inventaire = this.inventaire.get_items();
        return inventaire;
    }
}

module.exports = Player;
