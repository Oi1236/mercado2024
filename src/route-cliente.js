import { Router } from "express";
import { conn } from  "../src/mercado-bd.js";

const client_router = Router()

client_router.post("/client", (req, res) => {
    const {cpf_cliente, nome_cliente, telef_cliente, endereco_cliente} = req.body;
    conn.query(`insert into cliente(cpf_cliente, nome_cliente, telef_cliente, endereco_cliente)
        values ('${cpf_cliente}', '${nome_cliente}','${telef_cliente}', '${endereco_cliente}}')`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro no cadastro do cliente" + err.message
            });
        };
        res.json({
            Sucesso: `Cliente ${nome_cliente} cadastrado com sucesso!`
        });
    });
});

export {client_router}