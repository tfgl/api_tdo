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
    build(bat) {
        let requirements = this.batiments[bat].getNextRequirements();
        let items = this.inventaire.get_items();

        // check the ressources
        Object.keys(requirements).forEach( (key) => {
            if( items[key] < requirements[key] )
                return false;
        })

        this.batiments[bat].upgrade();
        // take the ressources
        Object.keys(requirements).forEach( (key) => {
            this.inventaire.destroy(key, requirements[key]);
        })
    }

    get_ressources() {
        return this.inventaire.get_items();
    }

    get_batiments() {
        return this.batiments;
    }

    get_realInventaire() {
        return this.inventaire;
    }

    get_inventaire() {
        return this.inventaire.get_items();
    }

    fillUp() {
        this.inventaire.add("ferraille", 100);
        this.inventaire.add("bois", 100);
        this.inventaire.add("textile", 100);
        this.inventaire.add("alcool", 100);
        this.inventaire.add("medicament", 100);
    }

    getColor() {
        return "base";
    }
}

module.exports = Base;
