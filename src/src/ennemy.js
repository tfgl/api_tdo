class Ennemy {
    constructor(lvl, id) {
        this.data = Ennemy.ennemyList[lvl][id];
    }

    hit(player) {
        player.getHit(this.f);
    }

    static getRandomEnnemy(lvl) {
        return new Ennemy(lvl, Math.floor( Math.random() * Ennemy.ennemyList[lvl].length));
    }

    static maxLvl() {
        return Ennemy.ennemyList.length;
    }

    static ennemyList = [
        [
            {
                name: 'voyou',
                e: 1,
                f: 2,
                a: 2,
                p: 0
            },
        ],
        [
            {
                name: 'voyou',
                e : 2,
                f : 3,
                a : 3,
                p : 0
            },
            {
                name: 'brigant',
                e : 4,
                f : 2,
                a : 1,
                p : 0
            }
        ],
        [
            {
                name: 'voyou',
                e : 3,
                f : 3,
                a : 4,
                p : 0
            },
            {
                name: 'brigant',
                e : 5,
                f : 2,
                a : 1,
                p : 0
            }
        ],
        [
            {
                name: 'voyou',
                e : 3,
                f : 4,
                a : 4,
                p : 0
            },
            {
                name: 'brigant',
                e : 5,
                f : 2,
                a : 1,
                p : 0
            },
            {
                name: 'bandit',
                e : 5,
                f : 4,
                a : 4,
                p : 0
            }
        ],
        [
            {
                name: 'voyou',
                e : 4,
                f : 4,
                a : 4,
                p : 0
            },
            {
                name: 'brigant',
                e : 6,
                f : 3,
                a : 1,
                p : 0
            },
            {
                name: 'bandit',
                e : 6,
                f : 4,
                a : 4,
                p : 0
            }
        ],
        [
            {
                name: 'voyou',
                e : 3,
                f : 4,
                a : 4,
                p : 0
            },
            {
                name: 'brigant',
                e : 6,
                f : 3,
                a : 2,
                p : 0
            },
            {
                name: 'bandit',
                e : 7,
                f : 5,
                a : 3,
                p : 0
            }
        ],
        [
            {
                name: 'voyou',
                e : 5,
                f : 5,
                a : 5,
                p : 0
            },
            {
                name: 'brigant',
                e : 8,
                f : 3,
                a : 2,
                p : 0
            },
            {
                name: 'bandit',
                e : 8,
                f : 5,
                a : 5,
                p : 0
            },
            {
                name: 'boss de clan',
                e : 5,
                f : 10,
                a : 2,
                p : 0
            }
        ],
        [
            {
                name: 'voyou',
                e : 8,
                f : 8,
                a : 5,
                p : 0
            },
            {
                name: 'brigant',
                e : 15,
                f : 4,
                a : 2,
                p : 0
            },
            {
                name: 'bandit',
                e : 13,
                f : 8,
                a : 5,
                p : 0
            },
            {
                name: 'boss de clan',
                e : 7,
                f : 20,
                a : 2,
                p : 0
            },
            {
                name: 'chef de district',
                e : 15,
                f : 35,
                a : 0,
                p : 0
            }
        ]
    ]
}

module.exports = Ennemy;
