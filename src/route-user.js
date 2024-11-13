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

// prod_router.post("/lista", (req, res) =>{
//     conn.query('select * from produtos',(err,result) =>{
//         if (err){
//             res.json({
//                 Erro: "Erro ao consultar dados !!!!" + err.message
//             })
//         }
//         res.json(result);

//         result.map((item ) => {
//             console.log(item.nome);
//         });
//     });
// });

// prod_router.post("/atualizar", (req,res) => {
//     const {nome,validade,preco, categoria} = req.body;
//     conn.query(`update into produtos(nome, validade, preco, categoria)
//         values ('${nome},${validade},${preco},${categoria}')`, (err,result) =>{
//             if (err){
//                 return res.json({
//                     Erro: "Erro ao atualizar dados !!!!" + err.massage
//                 });
//             }
//             res.json({
//                 Sucesso: `Produto ${nome}, nome atualizado`
//             });
//         });

// });

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