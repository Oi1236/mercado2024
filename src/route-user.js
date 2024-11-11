import { Router } from "express";
import {conn} from "../src/mercado-bd"


const prod_router = Router();

prod_router.post("/produto", (req, res) =>{
    const {nome, validade, preco} = req.body;

    conn.query
})