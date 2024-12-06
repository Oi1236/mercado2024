import express, { Router } from "express"
import { prod_router } from "./route-prod.js";
import { client_router } from "./route-cliente.js"
import {estoque_router} from "./router-estoque.js"
import {func_router} from "./router-funcionarios.js"
import { ven_router} from "./router-vendas.js"
import { fornec_router} from "./router-fornecedores.js"


const app = express();

app.use(express.json());
app.use(prod_router);
app.use(client_router);
app.use(estoque_router);
app.use(func_router);
app.use(ven_router);
app.use(fornec_router);



app.listen(3333, () => console.log('Servidor rodando...'));


