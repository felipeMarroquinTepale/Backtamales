const bd = require('../configMysql')  //Esconde toda la logica de conectividad a la base de datos

module.exports = {
    //Metodo para el login
    findByUsername: (User, Password, callback) => {
        //retorna el valor de la consulta con la funcion callback
        let sql = 'SELECT * FROM administrador WHERE User=? and Password=? '
        bd.query(sql,[User, Password],(err, data) => {
            if (err) throw err //obtenemos

            if (data.length>0)  //enviamos data
                callback(data[0])
            else
                callback(null)  //enviamos null
        })
    },

    //metodo para guardar pedido
    insertClient: (client,callback)=>{
        let sql = 'INSERT INTO cliente SET ?'
        bd.query(sql,client,(err,data)=>{
            if (err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },


}