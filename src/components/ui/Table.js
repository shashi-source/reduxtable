import React from 'react'
import Tabdata from '../ui/Tabdata'
import {useSelector} from 'react-redux'
import '../style/table.css'

const Table =(props)=> {

    
    const stateData = useSelector(state => state.data.data)
    // console.log(stateData)
    
    let classname=props.primary ? "primary" :"";
    
    return (
            <div className={classname}>
                <div className="flex-item-1">
                    <h3>student List</h3>
                    <label  data-bs-toggle="modal" data-bs-target="#add"><span class="fas fa-user-plus"></span>Add</label>
                </div>

                <div className="flex-item-2">
                <table className="table table-striped" style={{backgroundColor:"rgb(247, 225, 184)"}}>
                    <thead>
                    <tr>
                        <th>S.NO.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Qualification</th>
                        <th>Created on</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stateData.map((ele,index)=><Tabdata index={index} ele={ele} key={ele.id}/>)}
                    </tbody>
                    
                </table>
                </div>
            </div>
        )
    }

export default Table
