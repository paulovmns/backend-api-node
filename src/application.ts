import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://admin:admin55013back@backend-api.fz2bs3z.mongodb.net/?retryWrites=true&w=majority',{
    family: 4,
});

app.get("/", (req, res) => {
    res.send({
      message: "Hello, World!",
    });
  });


app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});