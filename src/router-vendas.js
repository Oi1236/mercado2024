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


ven_router.get("/listar_vendas", (req,res) =>{
    conn.query("select * from vendas", (err,result) =>{
        if (err){
            res.json({
                Erro:"Erro ao consultar os dados de venda!!!"  +  err.message
            })
        }
        res.json(result);

        result.map((item) => {
            console.log(item.quant_vendas)
            console.log(item.data_vendas)
        });
    });;
});


ven_router.put("/atualizacao_ven", (req,res) => {
    const{id_vendas, quant_vendas, data_vendas} = req.body;

    conn.query(`update vendas set quant_vendas='${quant_vendas}', data_vendas='${data_vendas}'
        where id_vendas=${id_vendas}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Venda alterado com sucesso"
            });
        });
});

ven_router.delete("/deletar_ven", (req, res) => {
    const {id_vendas } = req.body;

    conn.query(`delete from vendas where id_vendas ='${id_vendas}'`, (err, result) => {
        if (err) {
            return res.json("Erro ao deletar" +err.message)
        }
        res.json({
            Deletado: "Venda deletada com sucesso"
        });

    });
});


export {ven_router};