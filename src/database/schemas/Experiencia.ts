import mongoose from "mongoose";

const Experiencia = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true,
    },
    periodo: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


export default mongoose.model("Experiencia", Experiencia);