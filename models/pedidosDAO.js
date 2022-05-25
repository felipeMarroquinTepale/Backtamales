const bd = require("../configMysql");

module.exports = {

    insertPedidos: (pedido,callback)=>{
        let sql = 'INSERT INTO pedido SET ?'
        bd.query(sql,pedido,(err,data)=>{
            if (err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },


    consultPedidos : (callback) =>{
        let sql = 'SELECT * FROM pedido'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
}