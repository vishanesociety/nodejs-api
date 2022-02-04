const { Student } = require('../../models')

const createStudent = async (req, res) => {
    const {
        body: {
            name,
            class_,
            rollNumber  
        }
    } = req;

    try {
        const { dataValues } = await Student.create({
            name,
            class_,
            rollNumber  
        });

        console.log(JSON.stringify(dataValues));
        res.json(dataValues);
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students)
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}

const getStudent = async (req, res) => {
    
    
        const {
            params: {
                rollNumber: _roll 
            }
        } = req;
    
        try {
            const student = await Student.findAll({
                where: {
                    rollNumber: parseInt(_roll)
                }
            });
            res.json(student[0].dataValues)
        } catch (error) {
            res.send(error.message) 
        }

}

const deleteStudent = async (req, res) => {
    const {
        params: {
            rollNumber
        }
    } = req;

    try {
         await Student.destroy({
            where: {
                rollNumber
            }
        })
        res.send('Deleted');

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}

const patchStudent = async (req, res) => {
    const {
        params: {
            rollNumber: _roll
        },
        body: {
            name,
            class_
        }
    } = req;

    try {
        
        const { dataValues } = await Student.findOne({
            where:{
                rollNumber: _roll
            }
        })

        const { name: foundName, class_: foundClass } = dataValues;

        const student = await Student.patch({
            where: {
                rollNumber: _roll
            },
            attributes: {
                name: (foundName == name) ? foundName: name,
                class_: (foundClass == class_) ? foundClass: class_ 
            }
        })

        console.log(student);

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}

module.exports = {
    createStudent,
    getAllStudents,
    getStudent,
    deleteStudent,
    patchStudent
}