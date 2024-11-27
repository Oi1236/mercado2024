import { Router } from "express";
import { conn } from "../src/mercado-bd.js"


const prod_router = Router();


prod_router.post("/produto", (req, res) => {
    const { nome_produto, validade, preco_produto } = req.body;
    conn.query(`insert into produtos(nome , validade, preco)
        values ('${nome_produto}', '${validade}','${preco_produto}'}')`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na inserção de dados," + err.message
            });
        };
        res.json({
            Sucesso: `Produto ${nome_produto} cadastro com sucesso!`
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
            console.log(item.nome)
        });
    });;
});
prod_router.put("/Atualizacao", (req,res) => {
    const{id, nome_produto, preco_produto, validade} = req.body;

    conn.query(`update produtos set nome_produto = '${nome_produto}', preco_produto = '${preco_produto}', validade = '${validade}'
        where id_produto=${id}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Produto alterado com sucesso"
            });
        });
});




export { prod_router };