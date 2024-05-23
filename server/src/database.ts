import mysql from "promise-mysql";
import keys from "./keys";


const connection = mysql.createConnection(keys.database).then((cn) => {    
    if (cn) {
        console.log("database conectada");
        return cn;
    }else{
        throw "No se pudo conectar a la base de datos";
    }

});
export default connection ;
