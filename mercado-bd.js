
import mysql from "mysql"

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mercadinho_popular_bd"
});

conn.connect((err) =>{
    if (err) {
        console.log("Problema com bd:", err);
            return;

    }
    console.log("conectando ao bd...")
})
export {conn}