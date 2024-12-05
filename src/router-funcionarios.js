import { Router } from "express";
import { conn } from "../src/mercado-bd.js"

const func_router = Router();

func_router.post("/func" , (req,res) =>{
    const {cpf_func, nome_func, cargo_func, salario_func, telef_func} = req.body;
    conn.query(`insert into funcionarios(cpf_func, nome_func, cargo_func, salario_func, telef_func)
        values ('${cpf_func}', '${nome_func}', '${cargo_func}', '${salario_func}', '${telef_func}')`, (err, result) =>{
            if(err){
                return res.json({
                    erro: "Erro ao adicionar" +err.message
                });
            };
            res.json({
                mensagem: "Dados depositados com sucesso"
            });
        });
});

func_router.get("/listar_func", (req,res) =>{
    conn.query("select * from funcionarios", (err,result) =>{
        if (err){
            res.json({
                Erro:"Erro ao consultar os dados!!!"  +  err.message
            })
        }
        res.json(result);

        result.map((item) => {
            console.log(item.nome_func)
        });
    });
});

func_router.put("/Atualizacao_func", (req,res) => {
    const{id_func, cpf_func, nome_func, cargo_func, salario_func, telef_func} = req.body;

    conn.query(`update funcionarios set  cpf_func= '${cpf_func}, nome_func='${nome_func}', cargo_func ='${cargo_func} salario_func ='${salario_func}', telef_func='${telef_func}'
        where id_func=${id_func}`, (err,result) =>{
            if(err){
                return res.json("Errooooo: "+err.message)
            }
            res.json({
                Edicao:"Alteração realizada com sucesso"
            });
        });
});


func_router.delete("/deletar_func", (req, res) => {
    const {id_func } = req.body;

    conn.query(`delete from funcionarios where id_func ='${id_func}'`, (err, result) => {
        if (err) {
            return res.json("Erro ao deletar" +err.message)
        }
        res.json({
            Deletado: "Funcionário deletado com sucesso"
        });

    });
});





export {func_router};