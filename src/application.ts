import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/backendapi');

app.get("/", (req, res) => {
    res.send({
      message: "Hello, World!",
    });
  })


app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});