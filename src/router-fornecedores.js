import { Router } from "express";
import { conn } from "../src/mercado-bd.js"


const fornec_router = Router();

fornec_router.post("/fornecedor", (req, res) => {
    const {nome_fornec, cnpj, telef_fornec, email_fornec} = req.body;
    conn.query(`insert into fornecedores(nome_fornec, cnpj, telef_fornec, email_fornec)
        values ('${nome_fornec}', '${cnpj}','${telef_fornec}', '${email_fornec}')`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na inserção de produtos" + err.message
            });
        };
        res.json({
            Sucesso: `Fornecedor ${nome_fornec} cadastrado com sucesso!`
        });
    });
});

fornec_router.get("/listar_fornec", (req,res) =>{
    conn.query("select * from fornecedores", (err,result) =>{
        if (err){
            res.json({
                Erro:"Erro ao consultar os dados!!!"  +  err.message
            })
        }
        res.json(result);

        result.map((item) => {
            console.log(item.nome_fornec)
        });
    });;
});


fornec_router.put("/atualizacao_fornec", (req,res) => {
    const{id_fornec, nome_fornec,cnpj , telef_fornec, email_fornec} = req.body;

    conn.query(`update fornecedores set nome_fornec='${nome_fornec}', cnpj='${cnpj}', telef_fornec='${telef_fornec}, ${email_fornec}'
        where id_fornec=${id_fornec}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Fornecedor alterado com sucesso"
            });
        });
});

fornec_router.delete("/deletar_fornec", (req, res) => {
    const {id_fornec} = req.body;

    conn.query(`delete from fornecedores where id_fornec ='${id_fornec}'`, (err, result) => {
        if (err) {
            return res.json("Erro ao deletar" +err.message)
        }
        res.json({
            Deletado: "Fornecedor deletado com sucesso"
        });

    });
});

export { fornec_router };