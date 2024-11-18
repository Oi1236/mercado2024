import { Router } from "express";
import { conn } from "../src/mercado-bd.js"


const prod_router = Router();


prod_router.post("/produto", (req, res) => {
    const { nome, validade, preco, categoria } = req.body;
    conn.query(`insert into produtos(nome , validade, preco, categoria)
        values ('${nome}', '${validade}','${preco}','${categoria}, '${peso}'')`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na inserção de dados," + err.message
            });
        };
        res.json({
            Sucesso: `Produto ${nome} cadastro com sucesso!`
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

prod_router.put("/atualizar", (req,res) => {
    const { produtos , id } = req.body;

    conn.query(`update protudos  set ${id}, ${nome}, ${validade}, ${preco}, ${categoria}, ${preco}, ${peso} = 'produtos'
        where id= ${id}`, (err) 
        
    )
})



export { prod_router };