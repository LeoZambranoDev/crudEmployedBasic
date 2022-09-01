module.exports = (sequelize, dataTypes) => {
    let alias = 'Empleado';
    let cols = {
        codigo: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nif: {
            type: dataTypes.STRING(9),
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellido1: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellido2: {
            type: dataTypes.STRING(100),
            allowNull: true,
        }
    };
    let config = {
        tableName: 'empleado',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        paranoid:false
    }
    const Empleado = sequelize.define(alias, cols, config); 

    Empleado.associate=((models)=>{
        
        Empleado.belongsTo(models.Departamento,
            {
                as: "departamento",
                foreignKey: "codigo_departamento"
            }
        )


    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo
 
    return Empleado
};