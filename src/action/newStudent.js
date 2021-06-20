import {NewStudent,getStudentId,updateStudent,deleteStudent} from '../constant/actionTypes'

// ===========action===========

// add new student
export const newStudent=(student)=>{
    return{
        type:NewStudent,
        payload:student
    }
}

// get id from edit 
export const getId = (id) => ({
    type: getStudentId,
    payload:id
})

// update student
export const updatestudent= (student) => ({
    type: updateStudent,
    payload:student
})

// delete student
export const delStudent = (id) => ({
    type: deleteStudent,
    payload:id
})
