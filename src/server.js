import express, { Router } from "express"
import { prod_router } from "./route-user.js";
import { client_router } from "./route-cliente.js"



const app = express();

app.use(express.json());
app.use(prod_router);
app.use(client_router);



app.listen(3333, () => console.log('Servidor rodando...'));
