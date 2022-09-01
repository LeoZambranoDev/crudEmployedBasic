const express = require('express');
const router = express.Router();

const employedController= require("../controllers/empleado")

/* GET users listing. */

//Muestra el listado de los empleados
// http://localhost:1234/employed/
//Method: get
router.get('/', employedController.list);

//Muestra un empleado, de acuerdo al código
//example:  http://localhost:1234/employed/6 
//Method: get
router.get('/:id', employedController.getByPk);

//Almacena un nuevo empleado en la bd 
// example: http://localhost:1234/employed/
// method: post
// body={
//     "nif" :"nif1",                       OBLIGATORY
//     "nombre": "exampleName",             OBLIGATORY
//     "apellido1" :"exampleApellido1",     OBLIGATORY
//     "apellido2" : "ExampleApelldio2",    
//     "codigo_departamento": 3             OBLIGATORY
// }
router.post('/', employedController.createEmployed);

//Actualiza los datos de un empleado
// example: http://localhost:1234/employed/5
//method: put
// "codigo" del empleado no recibe cambios
router.put('/:id',employedController.updateEmployed);

//Elimina un empleado de la bd
// example: http://localhost:1234/employed/5
//method: delete
router.delete('/:id',employedController.deleteEmployed);

module.exports = router;
