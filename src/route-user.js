import { Router } from "express";
import { conn } from "../src/mercado-bd.js"


const prod_router = Router();


prod_router.post("/produto", (req, res) => {
    const { nome, validade, preco, categoria } = req.body;
    conn.query(`insert into produtos(nome , validade, preco, categoria)
        values ('${nome}', '${validade}','${preco}','${categoria}')`, (err, result) => {
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
                Erro:"Erro a consultar os dados!!!"  +  err.message
            })
        }
        res.json(result);

        result.map((item) => {
            console.log(item.nome)
        });
    });;
});
prod_router.post("/atualização", (req,res) => {
    conn.query(`update produtos set ${nome}, ${validade}, ${categoria}, ${preco}` , (err,result) => {
        if (err) {
            return res.json({
                Erro: "Erro na atualização de dados," + err.message
            });
        }
        res.json({
            Sucesso: `Produto atualizado com sucesso!`
        });
    });
});



// prod_router.post("/deletar" , (res,req) =>{
//     const {nome,validade,preco,categoria} = req.body;
//     conn.query(`delete into produtos (nome,validade,preco,categoria
//         valeus ('${nome},${validade},${preco},${categoria}') )` , (err,result) => {
//             if (err){
//                 return res.json({
//                     Erro: "Erro ao deletar dados !!!!" + err.message
//                 });
//             }
//             res.json({
//                 Sucesso:`Produto deletado com sucesso!!!`
//             });
//         });
// });


export { prod_router };