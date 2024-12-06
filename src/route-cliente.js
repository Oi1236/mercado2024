import { Router } from "express";
import { conn } from  "../src/mercado-bd.js";

const client_router = Router()

client_router.post("/cliente", (req, res) => {
    const {cpf_cliente, nome_cliente, telef_cliente, endereco_cliente} = req.body;
    conn.query(`insert into cliente(cpf_cliente, nome_cliente, telef_cliente, endereco_cliente)
        values ('${cpf_cliente}', '${nome_cliente}','${telef_cliente}',' ${endereco_cliente}')`, (err, result) => {
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


client_router.get("/listar_cliente", (req,res) =>{
    conn.query("select * from cliente", (err,result) =>{
        if (err){
            res.json({
                Erro:"Erro ao consultar os dados!!!"  +  err.message
            });
        };
        res.json(result);

        result.map((item) => {
            console.log(item.nome_cliente)
        });
    });
});

client_router.put("/Atualizacao_cliente", (req,res) => {
    const{id, cpf_cliente, nome_cliente, telef_cliente, endereco} = req.body;

    conn.query(`update cliente set cpf_cliente = '${cpf_cliente}', nome_cliente = '${nome_cliente}', telef_cliente = '${telef_cliente}', endereco_cliente = ' ${endereco}'
        where id_cliente=${id}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Atualização realizada"
            });
        });
});


client_router.delete("/deletacao_cliente", (req, res) => {
    const {id_cliente} = req.body;

    conn.query(`delete from cliente where id_cliente = '${id_cliente}'` , (err, result) => {
        if (err) {
            return res.json("Erro ao deletar " +err.message)
        }
        res.json({
            delete:"deu certo"
        });
    });
});

export {client_router};