import React from 'react'
import {delStudent,getId} from '../../action/newStudent'
import { useDispatch } from 'react-redux';


const TabData = ({ele,index}) => {
    
    const dispatch = useDispatch();

    const {id,name,email,qualification,date}=ele;
    return (
        <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{qualification}</td>
            <td>{date}</td>
            <td className="action">
                <label className="btn-action" data-bs-toggle="modal" data-bs-target="#edit" onClick={(e)=>{dispatch(getId(id))}} ><span class="fas fa-edit"></span></label>
                <label className="btn-action" onClick={()=>dispatch(delStudent(id))}><span class="fas fa-user-times"></span></label>
            </td>
        </tr>
        
    )
}

export default  TabData
