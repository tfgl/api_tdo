class Entity {
    constructor(stats) {
        Object.keys(stats).forEach( (key) => {
            this[key] = stats[key];
        });
        this.updateMaxHp();
        this.lvlUp();
        this.maxHp = this.e * 10;
    }

    regen() {
        this.hp = this.maxHp;
    }

    updateMaxHp() {
        this.maxHp = this.e * 10;
    }

    lvlUp() {
        this.lvl = this.e + this.f + this.a + this.p;
    }

    get_stats() {
        return {
            f: this.f,
            a: this.a,
            p: this.p,
            e: this.e,
            hp: this.hp,
            maxHp: this.maxHp,
            lvl: this.lvl,
        };
    }
}

module.exports = Entity;
