import express from "express";

const app = express();

app.listen(process.env.PORT || 3333, () => {
  console.log("🔥 Servidor rodando em http://localhost:3333/");
});
