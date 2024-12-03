import { Router } from "express";
import { conn } from "../src/mercado-bd.js"

const estoque_router = Router();

estoque_router.post("/estoque" , (req,res) =>{
    const {quant_estoque, data_ultimo_up} = req.body;
    conn.query(`insert into estoque (quant_estoque, data_ultimo_up)
        values ('${quant_estoque}', '${data_ultimo_up}')`, (err, result) =>{
            if(err){
                return res.json({
                    erro: "Erro ao depositar estoque" +err.message
                });
            };
            res.json({
                mensagem: "Estoque depositado com sucesso"
            });
        });
});

estoque_router.get("/listar_estoque", (req,res) =>{
    conn.query("select * from estoque", (err,result) =>{
        if (err){
            res.json({
                Erro:"Erro ao consultar os dados!!!"  +  err.message
            })
        }
        res.json(result);
        result.map((item) => {
            console.log(item.quant_estoque)
            console.log(item.data_ultimo_up)
        });
    });;
});


estoque_router.put("/up_estoque", (req,res) => {
    const{id_estoque, quant_estoque, data_ultimo_up} = req.body;

    conn.query(`update estoque set quant_estoque ='${quant_estoque}', data_ultimo_up='${data_ultimo_up}'
        where id_estoque=${id_estoque}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Estoque alterado com sucesso"
            });
        });
});


export {estoque_router};