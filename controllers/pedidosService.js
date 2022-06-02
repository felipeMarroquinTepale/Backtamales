const productDao = require("../models/pedidosDAO")

//Este metodo inserta pedidos de los clientes
const insertPedidos = (req, res) =>{
    const pedido={
        Idcliente: req.body.Idcliente,
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        Telefono: req.body.Telefono,
        Producto:req.body.Producto,
        Cantidad:req.body.Cantidad,
        totalPagar:req.body.totalPagar
    }
    //Mandamos a llamar el metodo insertClient del modelo
    productDao.insertPedidos(pedido,(data)=>{
        //console.log('data==> ',data)
        //si esta referenciado y ha sido afectado 1 fila
        //Big O(n)
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'datos insertados exitosamente'
            })
        }else {
            //Big O(n)
            res.send({
                status: false,
                message: 'Ocurrio un problema al insertar los datos'
            })
        }
    })
}

//Este metodo consulta pedidos de los clientes para el administrador
const consultPedidos = (req, res) =>{
    console.log("Obteniendo Producto")
    productDao.consultPedidos((data)=>{

        //Big O(n)
        if ( data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Ningun dato"
            })
        }
    })
}



module.exports = {
    insertPedidos,
    consultPedidos
}