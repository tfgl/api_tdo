class Inventaire {
    constructor(size) {
        this.size = size;
        this.items = [];
    }

    addItem(item) {
        if( this.items.length < this.size ) {
            this.items.push(item);
            return true;
        }
        return false;
    }
}

module.exports = Inventaire;
