const Inventaire = require("./inventaire.js");
const Batiment = require("./batiment.js");

class Base extends Batiment {
    constructor() {
        super("base");
        this.inventaire = new Inventaire(9999);

        this.forge = new Batiment("forge");
        this.armurerie = new Batiment("armurerie");
        this.infirmerie = new Batiment("infirmerie");
        this.salleDeSport = new Batiment("salleDeSport");
        this.salleDeMusculation = new Batiment("salleDeMusculation");
        this.salleAObstacles = new Batiment("salleAObstacles");
        this.salleACibles = new Batiment("salleACibles");
    }

    //TODO
    upgrade() {
    }
}

module.exports = Base;
