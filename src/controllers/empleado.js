const db = require("../data/models")

module.exports = {
    
    list: (req, res) => {
        db.Empleado.findAll()
            .then((response) => {
                res.json({
                    meta: {
                        status: 200,
                        message: "contacts get successfully",
                        empleados: response
                    }
                })
            })
            .catch((e) => res.status(400).json({
                meta: {
                    status: 400,
                    message: "error: in the server"
                }
            }))
    },
    getByPk: (req, res) => {

        const codigo = req.params.id

        if (codigo) {
            db.Empleado.findByPk(codigo)
                .then((response) => {
                    if (response) {
                        res.json({
                            meta: {
                                status: 200,
                                message: "contact gets successfully"
                            }
                        })
                    } else {
                        res.status(404).json({
                            meta: {
                                status: 404,
                                message: "contact not found"
                            }
                        })
                    }
                })
                .catch((e) => {
                    res.status(500).json({
                        meta: {
                            status: 500,
                            message: "Contact not Created"
                        }
                    })
                    console.log("error: "+e);
                })
        } else {
            //transfomar a Json de api
            res.send("Error, no ha enviado un código")
        }
    },
    createEmployed: (req, res) => {

        const empleado = {
            nif: req.body.nif,
            nombre: req.body.nombre,
            apellido1: req.body.apellido1,
            apellido2: (req.body.apellido2 ? req.body.apellido2 : undefined),
            codigo_departamento: req.body.codigo_departamento
        }


        db.Empleado.create(empleado)
            .then((response) => {
                console.log(response)
                res.json({
                    meta: {
                        status: 200,
                        message: "Contact Created successfully"
                    }
                })
            })
            .catch((e) => {
                console.log(e)
                res.status(500).json({
                    meta: {
                        status: 500,
                        message: "Contact not Created"
                    }
                })
            })


    },
    updateEmployed: (req, res) => {
        const codigo = req.params.id

        const empleado = {
            nif: (req.body.nif ? req.body.nif : undefined),
            nombre: (req.body.nombre ? req.body.nombre : undefined),
            apellido1: (req.body.apellido1 ? req.body.apellido1 : undefined),
            apellido2: (req.body.apellido2 ? req.body.apellido2 : undefined),
            codigo_departamento: (req.body.codigo_departamento ? req.body.codigo_departamento : undefined)
        }

        db.Empleado.update(empleado, {
            where: {
                codigo: codigo
            }
        })
            .then(response => {
                if (response == 1) {
                    res.json({
                        meta: {
                            status: 200,
                            message: "Contact updated successfully"
                        }
                    })
                } else {
                    res.json({
                        meta: {
                            status: 400,
                            message: "Contact not updated successfully"
                        }
                    })
                }
            })
            .catch((e) => {
                console.log("error al intentar actualizar el empleado: " + e)
                res.status(500).json({
                    meta: {
                        status: 500,
                        message: "Contact not updated"
                    }
                })
                
            })
    },
    deleteEmployed: (req, res) => {

        const codigo = req.params.id

        //aplicar express-validator
        db.Empleado.destroy({
            where: {
                codigo: codigo
            },
            force: true
        })
            .then(response => res.json(res.json({
                meta: {
                    status: 200,
                    message: "Contact updated successfully..." + response
                }
            })))
            .catch(e => {
                console.log("Error al intentar eliminar el empleado :" + e)
                res.status(500).json({
                    meta: {
                        status: 500,
                        message: "Contact not deleted"
                    }
                })
            })
    }

}