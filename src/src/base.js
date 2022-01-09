const EndlessInventaire = require("./endlessInventaire.js");
const Batiment = require("./batiment.js");

class Base extends Batiment {
    constructor() {
        super("base");
        this.inventaire = new EndlessInventaire();

        let forge = new Batiment("forge");
        let armurerie = new Batiment("armurerie");
        let infirmerie = new Batiment("infirmerie");
        let salleDeSport = new Batiment("salleDeSport");
        let salleDeMusculation = new Batiment("salleDeMusculation");
        let salleAObstacles = new Batiment("salleAObstacles");
        let salleACibles = new Batiment("salleACibles");

        this.batiments = {
            forge,
            armurerie,
            infirmerie,
            salleDeSport,
            salleDeMusculation,
            salleAObstacles,
            salleACibles
        };

        this.fillUp();
    }

    //TODO
    upgrade() {
    }

    get_ressources() {
        return this.inventaire.get_items();
    }

    get_batiments() {
        return this.batiments;
    }

    fillUp() {
        this.inventaire.add("ferraille", 100);
        this.inventaire.add("bois", 100);
        this.inventaire.add("textile", 100);
        this.inventaire.add("alcool", 100);
        this.inventaire.add("medicament", 100);
    }
}

module.exports = Base;
