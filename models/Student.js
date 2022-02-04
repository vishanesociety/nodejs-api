module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        class_: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        rollNumber: {
            type: DataTypes.INTEGER,      
        }
    })

    return Student;
}

