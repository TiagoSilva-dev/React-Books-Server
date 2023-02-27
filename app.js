const express = require("express");
const routerLivros = require("./rotas/livro");

const app = express();

const port = 8011;

app.use("/livros", routerLivros);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
