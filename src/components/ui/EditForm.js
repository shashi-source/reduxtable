import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {updatestudent} from '../../action/newStudent'
import shortid from 'shortid'
// import { useHistory } from 'react-router'
// import { useParams } from 'react-router'


const EditForm =()=> {
   
     //history method
    // const history=useHistory();
   // dispatch method
    const dispatch = useDispatch();
    // select state 
    const stateData = useSelector(state => state.data.stddata)
    // console.log(stateData)
     // state...
     const [values,setValue]=useState({
        id:shortid.generate(),
        name:"",
        email:"",
        qualification:"",
        date:new Date().toDateString()
    })  
    // Event handle.....
    const stdName=(event)=>{
        setValue({...values,name:event.target.value})
    }
    const stdEmail=(event)=>{
        setValue({...values,email:event.target.value})
    }
    const stdQualification=(event)=>{
        setValue({...values,qualification:event.target.value})
    }

    const onupdateStudent=(event)=>{
        event.preventDefault();
        // console.log(values)
        const updateStd=Object.assign(stateData,values)
        // console.log(updateStd)
        dispatch(updatestudent(updateStd));
        // history.push("/");
    }


     // reset handler
     const handleReset=(event)=>{
        event.preventDefault();
       setValue({name:"",email:"",qualification:""})
    }

    //useEffect method
    useEffect(()=>{
        if(stateData !=null){
            setValue({name:stateData.name,email:stateData.email,qualification:stateData.qualification})
        }
        // dispatch(getId(id))
    },[stateData]) 


         return (
            <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <button type="button" class="btn-close" style={{marginLeft:"480px",backgroundColor:"red"}} data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-content box-color">
                    <div class="modal-body">
                        <div className="flex-box">
                            <div className="flex-item"> 
                                <label className="box-label">Name :-</label>
                                <input type="text" placeholder="FullName" className="input-box" value={values.name} onChange={stdName}/>
                            </div>
                            <div className="flex-item">
                                <label className="box-label">Email :-</label>
                                <input type="email" placeholder="E-mail" className="input-box" value={values.email} onChange={stdEmail}/>
                            </div>
                            <div className="flex-item">
                                <label className="box-label">Qualification :-</label>
                                <input type="text" placeholder="FullName" className="input-box" value={values.qualification} onChange={stdQualification}/>
                            </div>
                            <div className="flex-item btn-action">
                                <button className="btn" onClick={(e)=>onupdateStudent(e)}>Submit</button>
                                <button className="btn reset" onClick={handleReset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default EditForm
