const { Partie } = require("../src");
const { Router } = require("express");

const partieRouter = Router();

partieRouter.post("/createPartie", (req, res) => {
    let pId = Partie.create();
    res.status(200).json({partieId: pId});
})

partieRouter.post("/joinPartie", (req, res) => {
    let pId = req.body.partieId;
    let jId = Partie
        .getPartie(pId)
        .addPlayer();

    res.status(200).json({playerId: jId});
})

partieRouter.post("/move", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;
    let dir = req.body.dir;

    // TODO remove event reaction from response
    let tile = Partie.getPartie(pId)
                     .get_player(jId)
                     .move(dir)

    res.status(200).json({tile});
})

partieRouter.post("/getGrille", (req, res) => {
    let pId = req.body.partieId;
    let x = req.body.x;
    let y = req.body.y;
    let d = req.body.d;

    let grille = Partie.getPartie(pId)
                       .get_map()
                       .get_chunk(x, y, d);

    res.status(200).json({grille});
})

partieRouter.post("/getBaseRessources", (req, res) => {
    let pId = req.body.partieId;
    let ressources = Partie
        .getPartie(pId)
        .get_map()
        .get_base()
        .get_ressources();
    res.status(200).json(ressources)
})

partieRouter.post("/getBaseBatiments", (req, res) => {
    let pId = req.body.partieId;
    let batiments = Partie
        .getPartie(pId)
        .get_map()
        .get_base()
        .get_batiments();

    res.status(200).json(batiments);
})

partieRouter.post("/getBaseBatimentCost", (req, res) => {
    let pId = req.body.partieId;
    let bat = req.body.bat

    let batiment = Partie
        .getPartie(pId)
        .get_map()
        .get_base()
        .get_batiments()[bat];

    let requirements = batiment.requirements[batiment.lvl];

    res.status(200).json(requirements);
})

// ask to delete this and put the bat name in in the body
partieRouter.post(/\/getBaseBatimentCost.+/, (req, res) => {
    let pId = req.body.partieId;
    let url = req.url;
    let name = url.slice(20, url.length);
    name = name.charAt(0).toLowerCase() + name.slice(1);

    let batiment = Partie
        .getPartie(pId)
        .get_map()
        .get_base()
        .get_batiments()[name];

    let requirements = batiment.requirements[batiment.lvl];

    res.status(200).json(requirements);
})

// TODO
partieRouter.post("/eventResponse", (req, res) => {
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

    // update the tile TODO
    let tile = curent_tile.reactToChoice(choix);

    res.status(200).json(tile);
})

partieRouter.post("/fouiller", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;

    let items = Partie
        .getPartie(pId)
        .get_player(jId)
        .fouiller();

    res.status(200).json(items);
})

partieRouter.post("/drop", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;
    let slot = req.body.slot;

    Partie.getPartie(pId).get_player(jId).drop(slot);

    res.status(200).send();
})

partieRouter.post("/construire", (req, res) => {
    let pId = req.body.partieId;
    let bat = req.body.batiment;

    let batiment = Partie.getPartie(pId)
          .get_map()
          .get_base()
          .build(bat);

    console.log(batiment)

    res.status(200).json(batiment);
})

partieRouter.post("/getInventaire", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;

    let inventaire = Partie.getPartie(pId)
          .get_player(jId)
          .get_inventaire();

    res.status(200).json(inventaire);
})

partieRouter.post("/equiper", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;
    let slot = req.body.slot;

    Partie.getPartie(pId)
          .get_player(jId)
          .equiper(slot);

    res.status(200).send();
})

partieRouter.post("/getEquipement", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;

    let equipement = Partie.getPartie(pId)
          .get_player(jId)
          .get_equipement();

    res.status(200).json(equipement);
})

partieRouter.post("/combattre", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;

    let actions = Partie.getPartie(pId)
          .get_player(jId)
          .combattre();

    res.status(200).json(actions);
})

partieRouter.post("/attackCorpsACorps", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;

    let actions = Partie.getPartie(pId)
          .get_player(jId)
          .closeAttack();

    res.status(200).json(actions);
})

partieRouter.post("/fuir", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;

    let actions = Partie.getPartie(pId)
          .get_player(jId)
          .flee();

    res.status(200).json(actions);
})

partieRouter.post("/getStats", (req, res) => {
    let pId = req.body.partieId;
    let jId = req.body.playerId;

    let player = Partie.getPartie(pId)
          .get_player(jId)
          .get_stats();

    res.status(200).json(player);
})

module.exports = {partieRouter}
