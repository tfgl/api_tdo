const EndlessInventaire = require("./endlessInventaire.js");
const Ennemy = require("./ennemy");

class Event {
    constructor(dst) {
        this.data = Event.getRandomEvent(dst);
        if( this.data.ennemyId )
            this.ennemy = new Ennemy(this.data.ennemyMinLvl, this.data.ennemyId);
        this.inventaire = new EndlessInventaire();
    }

    static eventProba = [0.8, 0.09, 0.08, 0.02, 0.01];
    static eventProbaCum = [0.8, 0.89, 0.97, 0.99, 1];

    reactToChoice(choix, player) {
        let res;
        switch(choix) {
            case "fouiller":
                res = this.fouiller();
                break;

            case "fuir":
                res = this.flee(player);
                break;

            case "combattre":
                res = this.combattre(player);
                break;

            case "entrer":
                res = this.entrer();
                break;

            default:
                break;
        }

        return res;
    }

    fouiller() {
        return this.inventaire.get_items();
    }

    get_realInventaire() {
        return this.inventaire;
    }

    get_inventaire() {
        return this.inventaire;
    }

    //TODO
    combattre(player) {
    }

    //TODO
    flee(player) {
        let a = player.get_stats().a;
        if( a < 10 )
            return 0

        let res = 10 + (a + (a / (a-1)))
        if( res > 100 )
            res = 100

        return Math.random()*100 - res > 0
    }

    //TODO
    enter() {
    }

    static eventsList = [
        // tres bon
        [
            {
                "text": "Un stock de matériel semble laissé à l'abandon depuis un certain temps vous pouvez tenter de le fouiller ou le laisser là.",
                "choix": ["fouiller", "se deplacer"],
                "respose": {
                    "fouiller": {},
                    "se deplacer": {},
                }
            }
        ],

        // bon
        [
            {
                "text": "Vous arrivez dans un campement de bandit de nuit , il semble qu'il y ait de la lumière qui filtre à travers les tentes. Vous pouvez tenter de partir tout de suite ou de fouiller discrètement les lieux",
                "choix": ["fouiller", "se deplacer"],
                "ennemyId": 3,
                "ennemyMinLvl": 3,
                "respose": {
                    "fouiller": {},
                    "se deplacer": {},
                }
            }
        ],

        //neutre
        [
            {
                "text": "il n'y a rien ici",
                "choix": ["se deplacer"],
                "respose": {
                    "se deplacer": {},
                }
            }
        ],

        // mauvais
        [
            {
                "text": "Vous vous trouvez nez à nez avec un bandit",
                "ennemyId": 3,
                "ennemyMinLvl": 3,
                "choix": ["combattre", "fuir"],
                "respose": {
                    "combattre": {},
                    "fuir": {},
                }
            }
        ],

        // tres mauvais
        [
            {
                "text": "vous découvrez une magnifique oasis qui semble complètement vide, il y a cet énorme tas de ferraille de l'autre côté qui semble avoir été abandonné là il y a peu de temps.",
                "choix": ["fouiller", "se deplacer"],
                "respose": {
                    "fouiller": {},
                    "se deplacer": {},
                }
            }
        ],

        // legendaire
        [
            {
                "text": `Vous découvrez un bâtiment délabré mais un bout de son écritau reste déchiffrable "éco_e".
Il y a une sorte de grande cour sur le côté avec des sortes de tubes en acier, échelles qui mènent à des plateformes en hauteur,
surement de vieux jeux pour enfant qui date d'une époque lointaine, très lointaine.

Vous pouvez essayer de rentrer dans le bâtiment principal ou de repartir`,

                "choix": ["entrer", "se deplacer"],
                "respose": {
                    "entrer": {},
                    "se deplacer": {},
                }
            }
        ]
    ];

    getColor() {
        return this.data.color;
    }


    static initEvent() {
        let colors = [
            'bonSigne',
            'bonSigne',
            'empty',
            'menace',
            'menace',
            'menace'
        ];

        for(let i=0; i<6; i++) {
            for(let j=0; j<Event.eventsList[i].length; j++) {
                Event.eventsList[i][j].lvl = i;
                Event.eventsList[i][j].id = [i, j];
                Event.eventsList[i][j].color = colors[i];
            }
        }
    }

    // TODO use dst
    static getRandomEvent = (dst) => {
        let n = Math.random();
        let eId;
        for( eId=0; n > Event.eventProbaCum[eId]; eId++ );
        let ev = Event.eventsList[eId][Math.floor( Math.random() * Event.eventsList[eId].length)]
        if(ev.ennemyId) {
            //TODO change lvl randomly betwen min and Ennemy.maxLvl()
        }
        return ev;
    }
}

module.exports = Event;
