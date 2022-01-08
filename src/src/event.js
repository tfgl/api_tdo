
class Event {
    constructor(dst) {
        this.data = Event.getRandomEvent(dst);
    }

    static eventProba = [0.8, 0.09, 0.08, 0.02, 0.01];
    static eventProbaCum = [0.8, 0.89, 0.97, 0.99, 1];

    static eventsList = [
        // tres bon
        [
            {
                "text": "Un stock de matériel semble laissé à l'abandon depuis un certain temps vous pouvez tenter de le fouiller ou le laisser là.",
                "choix": ["fouiller", "se deplacer"]
            }
        ],

        // bon
        [
            {
                "text": "Vous arrivez dans un campement de bandit de nuit , il semble qu'il y ait de la lumière qui filtre à travers les tentes. Vous pouvez tenter de partir tout de suite ou de fouiller discrètement les lieux",
                "choix": ["fouiller", "se deplacer"]
            }
        ],

        //neutre
        [
            {
                "text": "il n'y a rien ici",
                "choix": ["se deplacer"]
            }
        ],

        // mauvais
        [
            {
                "text": "Vous vous trouvez nez à nez avec un bandit",
                "choix": ["combattre", "fuir"]
            }
        ],

        // tres mauvais
        [
            {
                "text": "vous découvrez une magnifique oasis qui semble complètement vide, il y a cet énorme tas de ferraille de l'autre côté qui semble avoir été abandonné là il y a peu de temps.",
                "choix": ["fouiller", "se deplacer"]
            }
        ],

        // legendaire
        [
            {
                "text": `Vous découvrez un bâtiment délabré mais un bout de son écritau reste déchiffrable "éco_e".
Il y a une sorte de grande cour sur le côté avec des sortes de tubes en acier, échelles qui mènent à des plateformes en hauteur,
surement de vieux jeux pour enfant qui date d'une époque lointaine, très lointaine.

Vous pouvez essayer de rentrer dans le bâtiment principal ou de repartir`,

                "choix": ["entrer", "se deplacer"]
            }
        ]
    ];

    static getColor(lvl) {
        return [
            'bonSigne',
            'bonSigne',
            'empty',
            'menace',
            'menace',
            'menace'
        ][lvl];
    }

    static initEvent() {
        for(let i=0; i<6; i++) {
            for(let j=0; j<Event.eventsList[i].length; j++) {
                Event.eventsList[i][j].lvl = i;
                Event.eventsList[i][j].id = [i, j];
                Event.eventsList[i][j].color = Event.getColor(i);
            }
        }
    }

    static getRandomEvent = (dst) => {
        let n = Math.random();
        let eId;
        for( eId=0; n > Event.eventProbaCum[eId]; eId++ );
        return Event.eventsList[eId][Math.floor( Math.random() * Event.eventsList[eId].length)]
    }
}

module.exports = Event;
