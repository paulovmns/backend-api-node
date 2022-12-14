import { Request, Response } from "express";
import Experiencia from "../database/schemas/Experiencia";

class ExperienciaController {


    async delete(request: Request, response: Response){
        try {

            const {id} = request.params;
            const data = await Experiencia.findByIdAndDelete(id);

        if(!data) {

            return response.status(404).json({message: "Data not found!"});

        }

        return response.status(200).json({message: "Success! Data deleted! "})
        } catch(error) {

            return response.status(404).json({message: "ERROR: Delete not working."});
        
        }
    }

    async update(request: Request, response: Response){
        try {
        const {id} = request.params;
        await Experiencia.findByIdAndUpdate(id, request.body);

        response.status(200).json ({message: "Success! Data updated!"});
        
        }catch(error){
            return response.status(404).json({message: "ERROR: Update not working."});

        }
    }
       

    async find(request: Request, response: Response) {

        try {

            const users = await Experiencia.find();
            return response.json(users);

        } catch (error) {

            return response.status(500).json({
                error: "Something went wrong. Try again!",
                message: error,
            });

        }

    }

    async create(request: Request, response: Response) {
        const { descricao, local, periodo } = request.body;


    try {

        const user = await Experiencia.create({
            descricao,
            local,
            periodo,
        });
        
        return response.json(user);
        
    } catch (error) {
        return response.status(500).json({
            error: "Registration failed",
            message: error,
        });
    }
    }
}

    export default new ExperienciaController();