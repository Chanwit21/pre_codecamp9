module.exports = (sequelize,DataTypes)=>{
    const model = sequelize.define('TodoList',{
        task:{
            type:DataTypes.STRING(255)
        }
    },{

        tableName:'todolists',
        timestamps:false
    });

    return model
}