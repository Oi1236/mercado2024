import { Router } from "express";
import {conn} from "../src/mercado-bd"


const prod_router = Router();



prod_router.post("/produto", (req, res) =>{
    const {nome, validade, preco} = req.body;
    conn.query(`insert into produtos(nome , validade, preco)
        valeus ('${nome}', '${preco}','${validade }')`,(err,result) =>{
            if (err){
                return res.json({
                    Erro: "Erro na inserção de dados," +err.message
                });
            };
            res.json({
                Sucesso: `Produto ${nome} cadastro com sucesso!`
            });
        });
});

