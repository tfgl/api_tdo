class Inventaire {
    constructor(size) {
        this.size = size;
        this.items = [];
    }

    add(item) {
        if( this.items.length < this.size ) {
            this.items.push(item);
            return true;
        }
        return false;
    }

    get_items() {
        return this.items;
    }

    take(slot) {
        return this.items.splice(slot, 1)[0];
    }

    get_item(slot) {
        return this.items[slot];
    }

    full() {
        return this.items.length >= this.size;
    }

    print() {
        let str = `size: ${this.size} `;
        for(let i=0; i<this.items.length; i++)
            str = `${str}[${this.items[i]}]`;
        return str;
    }
}

module.exports = Inventaire;
