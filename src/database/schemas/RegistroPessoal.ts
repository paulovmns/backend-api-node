import mongoose from "mongoose";

const RegistroPessoal = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    cidadeEstado: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


export default mongoose.model("Registro Pessoal", RegistroPessoal);