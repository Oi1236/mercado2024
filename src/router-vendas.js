import { Router } from "express";
import { conn } from "../src/mercado-bd.js"

const ven_router = Router();

ven_router.post("/vendas", (req, res) => {
    const {quant_vendas, data_vendas} = req.body;
    conn.query(`insert into vendas(quant_vendas, data_vendas)
        values ('${quant_vendas}', '${data_vendas}')`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na inserção de vendas" + err.message
            });
        };
        res.json({
            Sucesso: `Vendas contadas com sucesso!`
        });
    });
});


