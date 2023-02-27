const { Router } = require("express");
const { getLivros } = require("../controladores/livro");

const router = Router();

router.get("/", getLivros);

module.exports = router;
