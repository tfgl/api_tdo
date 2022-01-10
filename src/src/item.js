class Item{
    constructor(type, id) {
        switch(type) {
            case "arme":
                this.stats = Item.arme[id];
                break;

            case "armedst":
                this.stats = Item.armedst[id];
                break;

            case "soins":
                this.stats = Item.soins[id];
                break

            case "armure":
                this.stats = Item.armure[id];
                break

            case "materiaux":
                this.stats = Item.materiaux[id];
                break
        }
    }

    static arme = [
            {
                name: "épée de fortune",
                mod: {
                    f: 1
                }
            },
            {
                name: 'épée en fer',
                mod: {
                    f: 3
                }
            },
            {
                name: 'épée en acier',
                mod: {
                    f: 5
                }
            },
            {
                name: 'botwave sword',
                mod: {
                    f: 9
                }
            },
            {
                name: 'hache de fortune',
                mod: {
                    f: +2,
                    a: -1
                }
            },
            {
                name: 'hache en fer',
                mod: {
                    f: 5,
                    a: -3
                }
            },
            {
                name: 'hache en acier',
                mod: {
                    f: 7,
                    a: -4
                }
            },
            {
                name: 'fourche',
                mod: {
                    f: 2
                }
            },
            {
                name: 'lasso',
                mod: {
                    f: 1,
                    a: 1
                }
            },
            {
                name: 'tesson de bouteille',
                mod: {
                    f: 6,
                    a: -8
                }
            },
            {
                name: 'Telisson de bouteille',
                mod: {
                    f: 20,
                    a: -5
                }
            }
        ]
    static armedst = [
            {
                name: 'pistolet',
                dmg: 0.5,
                mod: {
                }
            },
            {
                name: 'fusil',
                dmg: 0.8,
                mod: {
                }
            },
            {
                name: 'sniper',
                dmg: 1,
                mod: {
                    a: -8,
                    p: 5
                }
            },
            {
                name: 'superGrosFlingueDePoche',
                dmg: 1,
                mod: {
                    a: 2
                }
            }
        ]

    static materiaux = [
        {
            name: 'ferraille',
        },
        {
            name: 'bois',
        },
        {
            name: 'textiles',
        },
        {
            name: 'alcool',
        },
        {
            name: 'medicaments',
        }
    ];

    static soins = [
        {
            name: 'bandage',
            healing: 0.2
        },
        {
            name: 'kit de fortune',
            healing: 0.33
        },
        {
            name: 'kit industriel',
            healing: 0.5
        },
        {
            name: 'kit de soins',
            healing: 0.75
        },
        {
            name: 'kit ultime',
            healing: 1
        },
    ]

    static armure = [
        {
            name: 'poubelle',
            bodyPart: 'tete',
            mod: {
                e: 1
            }
        },
        {
            name: 'casserole',
            bodyPart: 'tete',
            mod: {
                e: 2
            }
        },
        {
            name: 'casquette',
            bodyPart: 'tete',
            mod: {
                e: 1
            }
        },
        {
            name: 'seau en bois',
            bodyPart: 'tete',
            mod: {
                e: 3
            }
        },
        {
            name: 'casque en fer',
            bodyPart: 'tete',
            mod: {
                e: 4
            }
        },
        {
            name: 'casque en acier',
            bodyPart: 'tete',
            mod: {
                e: 6
            }
        },
        {
            name: 'casque en titane',
            bodyPart: 'tete',
            mod: {
                e: 8
            }
        },
        {
            name: 'casque en peau de Roche',
            bodyPart: 'tete',
            mod: {
                e: 19
            }
        },
        {
            name: 'armure en carton-pâte',
            bodyPart: 'corps',
            mod: {
                e: 4
            }
        },
        {
            name: 'armure en cuir',
            bodyPart: 'corps',
            mod: {
                e: 7
            }
        },
        {
            name: 'armure en plexiglass',
            bodyPart: 'corps',
            mod: {
                e: 7
            }
        },
        {
            name: 'armure de fer',
            bodyPart: 'corps',
            mod: {
                e: 11
            }
        },
        {
            name: 'armure en acier',
            bodyPart: 'corps',
            mod: {
                e: 17
            }
        },
        {
            name: 'armure en titane',
            bodyPart: 'corps',
            mod: {
                e: 20
            }
        },
        {
            name: 'armure en peau de Roche',
            bodyPart: 'corps',
            mod: {
                e: 39
            }
        },
        {
            name: 'sac plastique carrouf',
            bodyPart: 'sac',
            mod: {
                capacity: 3 
            }
        },
        {
            name: 'sac en peau de lézard',
            bodyPart: 'sac',
            mod: {
                capacity: 5 
            }
        },
        {
            name: 'sac en cuir',
            bodyPart: 'sac',
            mod: {
                capacity: 7 
            }
        },
        {
            name: 'sac en cuir de jaguar',
            bodyPart: 'sac',
            mod: {
                capacity: 11 
            }
        },
        {
            name: 'sac westpocket',
            bodyPart: 'sac',
            mod: {
                capacity: 17 
            }
        },
        {
            name: 'sac luc damiens',
            bodyPart: 'sac',
            mod: {
                capacity: 25 
            }
        },
        {
            name: 'immense sac rando-rigolo',
            bodyPart: 'sac',
            mod: {
                capacity: 50 
            }
        },
        {
            name: 'sac béchanelle',
            bodyPart: 'sac',
            mod: {
                capacity: 75 
            }
        },
        {
            name: 'sac en peau de roche',
            bodyPart: 'sac',
            mod: {
                capacity: 200 
            }
        }
    ]


    static init() {
        for( let i = 0; i < Item.arme.length; i++) {
            Item.arme[i].bodyPart = 'arme';
        }
        for( let i = 0; i < Item.arme.length; i++) {
            Item.armedst[i].bodyPart = 'armedst';
        }
        for( let i = 0; i < Item.soins.length; i++) {
            Item.soins[i].bodyPart = 'soins';
        }
    }

}

module.exports = Item;
