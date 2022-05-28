const userDAO = require('../models/usersDAO')


//  request, response
const userValidate = (req, res) => {
    //peticion get metodo que sirve para el login

    userDAO.findByUsername(req.body.user,req.body.password,(data)=>{
        //Metodo callback retorma el valor del modelo UserDAO

        try{
            //Big O(n)
            if(!data)throw new Err("Ups, algo salio mal. Si usted no tiene una cuenta cree una nueva")
            console.log('Data===>', data)
            res.send({  //Enviamos response
                status: true,
                message:'Inicio de sesion correcta'
            })
        }catch (Err){
            res.send({ //Enviamos response
                status:false,
                message:'Datos incorrectos, revise correctamente sus datos'
            })
        }
    })
}

const  registrarClient = (req,res)=>{
    const client={
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        Telefono: req.body.Telefono,
    }

    //Mandamos a llamar el metodo insertClient del modelo
    userDAO.insertClient(client,(data)=>{
        console.log('data==> ',data)
        //si esta referenciado y ha sido afectado 1 fila
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'datos insertados exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al insertar los datos'
            })
        }
    })
}


module.exports = {
    userValidate,
    registrarClient
}