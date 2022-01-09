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

partieRouter.get("/getBaseRessources", (req, res) => {
    let pId = req.body.partieId;
    let ressources = Partie
        .getPartie(pId)
        .get_map()
        .get_base()
        .get_ressources();
    res.status(200).json(ressources)
})

partieRouter.get("/getBaseBatiments", (req, res) => {
    let pId = req.body.partieId;
    let batiments = Partie
        .getPartie(pId)
        .get_map()
        .get_base()
        .get_batiments();

    res.status(200).json(batiments);
})

//TODO regex
partieRouter.get(/\/getBaseBatimentCost.*/, (req, res) => {
    let pId = req.body.partieId;
    let url = req.url;
    let name = url.slice(20, url.length);
    name = name.charAt(0).toLowerCase() + name.slice(1);

    console.log(name);

    let batiment = Partie
        .getPartie(pId)
        .get_map()
        .get_base()
        .get_batiments()[name];

    let requirements = batiment.requirements[batiment.lvl];

    res.status(200).json(requirements);
})

partieRouter.get("/eventResponse", (req, res) => {
    // find the corresponding event
    // put it on the player tile
    // send the tile

    let pId = req.body.partieId;
    let jId = req.body.playerId;
    let choix = req.body.choix;

    // get the player
    let player = Partie.getPartie(pId).get_player(jId);

    // get the player tile
    let curent_tile = player.get_tile();

    // update the tile
    let tile = curent_tile.reactToChoice(choix);

    res.status(200).json(tile);
})

module.exports = {partieRouter}
