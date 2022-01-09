class EndlessInventaire {
    constructor() {
        this.items = {};
    }

    add(item, quantity) {
        if( this.items[item] ) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
        return true;
    }

    get_items() {
        return this.items;
    }

    destroy(item, quantity) {
        if(this.items[item] >= quantity) {
            this.items[item] -= quantity;
            return true;
        }
        return false;
    }
}

module.exports = EndlessInventaire;

