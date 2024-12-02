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

client_router.get("/listar_cliente", (req,res) =>{
    conn.query("select * from cliente", (err,result) =>{
        if (err){
            res.json({
                Erro:"Erro ao consultar os dados!!!"  +  err.message
            })
        }
        res.json(result);

        result.map((item) => {
            console.log(item.nome_cliente)
        });
    });;
});

client_router.put("/Atualizacao_cliente", (req,res) => {
    const{id, cpf_cliente, nome_cliente, telef_cliente, endereco_cliente} = req.body;

    conn.query(`update cliente set cpf_cliente = '${cpf_cliente}', nome_cliente = '${nome_cliente}', telef_cliente = '${telef_cliente}, end = ${endereco_cliente}'
        where id_cliente=${id}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Atualização realizada"
            });
        });
});


export {client_router}