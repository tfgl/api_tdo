const Event = require("./event")
const Base = require("./base")

class Map {
    constructor(w, h, partie) {
        this.w = w;
        this.h = h;
        this.grille = [];
        this.partie = partie;

        this.init();
    }

    init() {
        let [w, h] = [this.w, this.h];
        for(let y=0; y<h; y++) {
            this.grille.push([])
            for(let x=0; x<w; x++) {
                let dst = Math.sqrt(w*w + h*h);
                this.grille[y].push(new Event(dst));
            }
        }
        this.grille[h/2][w/2] = new Base();
        this.base = this.grille[h/2][w/2];
    }

    isInSide(x, y) {
        return (x >= 0 && x < this.w) && (y >= 0 && y < this.h);
    }

    get_base() {
        return this.base;
    }

    get_tile(x, y) {
        return this.grille[y][x];
    }

    get_chunk(x, y, d) {
        let chunk = [];

        // on y axis
        for(let i=0; i<d; i++) {
            chunk.push([]);
            // on x axis
            for(let j=0; j<d; j++) {
                let [x2, y2] = this.centerToTopLeft(j+x-d/2, i+y-d/2);
                if( this.partie.isFree(x2, y2) ) {
                    chunk[i].push( this.grille[y2][x2] );
                }
                else {
                    chunk[i].push( "player" );
                }
            }
        }

        return chunk;
    }

    // (w/2, h/2) => (0, 0)
    topLeftToCenter(x, y) {
        console.log(x, y);
        return [x - this.w/2, y - this.h/2];
    }

    // (0, 0) => (w/2, h/2)
    centerToTopLeft(x, y) {
        return [x + this.w/2, y + this.h/2];
    }
}

module.exports = Map;
