import { Request, Response } from "express";
import RegistroPessoal from "../database/schemas/RegistroPessoal";

class RegistroPessoalController {


    async delete(request: Request, response: Response){
        try {

            const {id} = request.params;
            const data = await RegistroPessoal.findByIdAndDelete(id);

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
        await RegistroPessoal.findByIdAndUpdate(id, request.body);

        response.status(200).json ({message: "Success! Data updated!"});
        }catch(error){
            return response.status(404).json({message: "ERROR: Update not working."});

        }
    }
       

    async find(request: Request, response: Response) {

        try {

            const users = await RegistroPessoal.find();
            return response.json(users);

        } catch (error) {

            return response.status(500).json({
                error: "Something went wrong. Try again!",
                message: error,
            });

        }

    }

    async create(request: Request, response: Response) {
        const { nome, idade, bairro, cidadeEstado } = request.body;


    try {

        const user = await RegistroPessoal.create({
            nome,
            idade,
            bairro,
            cidadeEstado,
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

    export default new RegistroPessoalController();