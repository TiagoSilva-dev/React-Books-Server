const express = require("express");
const routerLivros = require("./rotas/livro");

const app = express();

const port = 8123;

app.use("/livros", routerLivros);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
