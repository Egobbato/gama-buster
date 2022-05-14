const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");
const generoController = require("../controllers/genero");
const filmeController = require("../controllers/filme");
const reservaController = require("../controllers/reserva");
const clienteController = require("../controllers/cliente");

//rotas - filme

router.get("/filme", filmeController.index);
router.post("/filme", filmeController.store);
router.get("/filme/:id", filmeController.show);
router.put("/filme/:id", filmeController.update);
router.delete("/filme/:id", filmeController.destroy);

//rotas genero

router.get("/genero", generoController.index);
router.post("/genero", generoController.store);
router.get("/genero/:id", generoController.show);
router.put("/genero/:id", generoController.update);
router.delete("/genero/:id", generoController.destroy);

//rotas reserva

router.get("/reserva", reservaController.index);
router.post("/reserva", reservaController.store);
router.get("/reserva/:id", reservaController.show);
router.put("/reserva/:id", reservaController.update);
router.delete("/reserva/:id", reservaController.destroy);

//rotas cliente

router.get("/cliente", clienteController.index);
router.post("/cliente", clienteController.store);
router.get("/cliente/:id", clienteController.show);
router.put("/cliente/:id", clienteController.update);
router.delete("/cliente/:id", clienteController.destroy);

router.get("/", homeController.welcome);

module.exports = router;
