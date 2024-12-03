import { Router } from "express";
import { conn } from "../src/mercado-bd.js"


const prod_router = Router();

prod_router.post("/produto", (req, res) => {
    const {nome_produto, preco_produto, validade} = req.body;
    conn.query(`insert into produtos( nome_produto, preco_produto, validade)
        values ('${nome_produto}', '${preco_produto}','${validade}')`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na inserção de produtos" + err.message
            });
        };
        res.json({
            Sucesso: `Produto ${nome_produto} cadastrado com sucesso!`
        });
    });
});

prod_router.get("/listar", (req,res) =>{
    conn.query("select * from produtos", (err,result) =>{
        if (err){
            res.json({
                Erro:"Erro ao consultar os dados!!!"  +  err.message
            })
        }
        res.json(result);

        result.map((item) => {
            console.log(item.nome_produto)
        });
    });;
});
prod_router.put("/Atualizacao", (req,res) => {
    const{id_produto, nome_produto, preco_produto, validade} = req.body;

    conn.query(`update produtos set nome_produto='${nome_produto}', preco_produto='${preco_produto}', validade='${validade}'
        where id_produto=${id_produto}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Produto alterado com sucesso"
            });
        });
});

prod_router.delete("/Deletar", (req, res) => {
    const {id_produto } = req.body;

    conn.query(`delete from produtos where id_produto ='${id_produto}'`, (err, result) => {
        if (err) {
            return res.json("Erro ao deletar" +err.message)
        }
        res.json({
            Deletado: "Produto deletado com sucesso"
        });

    });
});


export { prod_router };