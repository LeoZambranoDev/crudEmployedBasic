module.exports = (sequelize, dataTypes) => {
    let alias = 'Departamento';
    let cols = {
        codigo: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        presupuesto: {
            type: dataTypes.DOUBLE,
            allowNull: false
        }
    };
    let config = {
        tableName: 'departamento',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        paranoid:false
    }
    const Departamento = sequelize.define(alias, cols, config); 

    Departamento.associate=((models)=>{
        
        Departamento.hasMany(models.Empleado,
            {
                as: "empleados",
                foreignKey: "codigo_departamento"
            }
        )


    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo
 
    return Departamento
};