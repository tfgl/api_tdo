const { Partie } = require("../src");
const { Router } = require("express");

const partieRouter = Router();

partieRouter.get("/createPartie", (req, res) => {
    let pId = Partie.create();
    res.status(200).json({partieId: pId});
})

partieRouter.get("/joinPartie", (req, res) => {
    let jId = Partie.join(req.body.partieId);
    res.status(200).json({playerId: jId});
})

partieRouter.get("/move", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;
    let dir = req.body.dir;

    let tile = Partie.move(pId, jId, dir);
    res.status(200).json({tile});
})

partieRouter.get("/getGrille", (req, res) => {
    let pId = req.body.partieId;
    let x = req.body.x;
    let y = req.body.y;
    let d = req.body.d;

    let grille = Partie.get_chunk(pId, x, y, d);
    res.status(200).json({grille});
})

module.exports = {partieRouter}
