class Batiment {
    constructor(name) {
        this.name = name;
        this.requirements = Batiment.getRequirements(name);
        this.lvl = 0;
    }

    upgrade() {
    }

    getNextRequirements () {
        return this.requirements[this.lvl];
    }

    static getRequirements(building) {
        let requirements = {
            "forge": [
                {
                    "ferraille": 2,
                    "bois": 2,
                    "textile": 1,
                    "alcool": 0,
                    "medicament": 0,
                },
                {
                    "ferraille": 4,
                    "bois": 3,
                    "textile": 2,
                    "alcool": 1,
                    "medicament": 0,
                },
                {
                    "ferraille": 12,
                    "bois": 10,
                    "textile": 5,
                    "alcool": 3,
                    "medicament": 1,
                },
                {
                    "ferraille": 38,
                    "bois": 22,
                    "textile": 11,
                    "alcool": 19,
                    "medicament": 4,
                },
            ],
            "armurerie":
            [
                {
                    "ferraille": 0,
                    "bois": 2,
                    "textile": 3,
                    "alcool": 0,
                    "medicament": 0,
                },
                {
                    "ferraille": 4,
                    "bois": 7,
                    "textile": 9,
                    "alcool": 2,
                    "medicament": 0,
                },
                {
                    "ferraille": 7,
                    "bois": 10,
                    "textile": 17,
                    "alcool": 4,
                    "medicament": 0,
                },
                {
                    "ferraille": 12,
                    "bois": 10,
                    "textile": 40,
                    "alcool": 9,
                    "medicament": 2
                }
            ],
            "infirmerie":
            [
                {
                    "ferraille": 0,
                    "bois": 0,
                    "textile": 4,
                    "alcool": 5,
                    "medicament": 5,
                },
                {
                    "ferraille": 0,
                    "bois": 5,
                    "textile": 6,
                    "alcool": 8,
                    "medicament": 12,
                },
                {
                    "ferraille": 3,
                    "bois": 15,
                    "textile": 20,
                    "alcool": 19,
                    "medicament": 22,
                },
                {
                    "ferraille": 6,
                    "bois": 7,
                    "textile": 15,
                    "alcool": 35,
                    "medicament": 38,
                }
            ],
            "salleDeSport": [
                {
                    "ferraille": 2,
                    "bois": 2,
                    "textile": 1,
                    "alcool": 0,
                    "medicament": 0,
                },
                {
                    "ferraille": 4,
                    "bois": 3,
                    "textile": 2,
                    "alcool": 1,
                    "medicament": 0,
                },
                {
                    "ferraille": 8,
                    "bois": 6,
                    "textile": 4,
                    "alcool": 3,
                    "medicament": 1,
                },
                {
                    "ferraille": 18,
                    "bois": 15,
                    "textile": 8,
                    "alcool": 16,
                    "medicament": 1,
                }
            ],
            "salleDeMusculation": [
                {
                    "ferraille": 4,
                    "bois": 0,
                    "textile": 1,
                    "alcool": 0,
                    "medicament": 0
                },
                {
                    "ferraille": 8,
                    "bois": 1,
                    "textile": 1,
                    "alcool": 1,
                    "medicament": 0,
                },
                {
                    "ferraille": 8,
                    "bois": 4,
                    "textile": 4,
                    "alcool": 2,
                    "medicament": 0
                },
                {
                    "ferraille": 15,
                    "bois": 10,
                    "textile": 9,
                    "alcool": 15,
                    "medicament": 1
                }
            ],
            "salleAObstacles": [
                {
                    "ferraille": 2,
                    "bois": 3,
                    "textile": 1,
                    "alcool": 1,
                    "medicament": 0
                },
                {
                    "ferraille": 5,
                    "bois": 6,
                    "textile": 3,
                    "alcool": 1,
                    "medicament": 0
                },
                {
                    "ferraille": 8,
                    "bois": 8,
                    "textile": 5,
                    "alcool": 2,
                    "medicament": 1
                },
                {
                    "ferraille": 12,
                    "bois": 10,
                    "textile": 9,
                    "alcool": 10,
                    "medicament": 2
                }
            ],
            "salleACibles": [
                {
                    "ferraille": 2,
                    "bois": 1,
                    "textile": 5,
                    "alcool": 4,
                    "medicament": 0
                },
                {
                    "ferraille": 8,
                    "bois": 7,
                    "textile": 10,
                    "alcool": 15,
                    "medicament": 0
                },
                {
                    "ferraille": 10,
                    "bois": 11,
                    "textile": 15,
                    "alcool": 19,
                    "medicament": 5
                },
                {
                    "ferraille": 15,
                    "bois": 13,
                    "textile": 17,
                    "alcool": 20,
                    "medicament": 7
                }
            ],
            "base": [
                {
                    "ferraille": 3,
                    "bois": 3,
                    "textile": 3,
                    "alcool": 3,
                    "medicament": 3
                },
                {
                    "ferraille": 13,
                    "bois": 13,
                    "textile": 13,
                    "alcool": 13,
                    "medicament": 13
                },
                {
                    "ferraille": 23,
                    "bois": 23,
                    "textile": 23,
                    "alcool": 23,
                    "medicament": 23
                },
                {
                    "ferraille": 33,
                    "bois": 33,
                    "textile": 33,
                    "alcool": 33,
                    "medicament": 33
                }
            ]
        };

        return requirements[building];
    }
}

module.exports = Batiment;
