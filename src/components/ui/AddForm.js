import React,{useState,useEffect} from 'react'
import '../style/form.css'
import {newStudent} from '../../action/newStudent'
import shortid from 'shortid'
import { useHistory } from 'react-router'
import { connect, useDispatch } from 'react-redux'

const AddForm = () => {
     //history method
     const history=useHistory(); 
     // dispatch method
      const dispatch = useDispatch();
     // state...
     const [values,setValue]=useState({
         id:shortid.generate(),
         name:"",
         email:"",
         qualification:"",
         date:new Date().toDateString()
     })    
     // vaildation state
    const [vaild,setVaild]=useState(false)
    // const [nameVaild,setNameVaild]=useState(false)
    const [emailVaild,setEmailVaild]=useState(false)
    
    // submit state
    const [submitted,setsubmitted]=useState(false)

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

    // submit handler
    const handleSubmit=(event)=>{
        event.preventDefault();
        // setValue({...values,date:new Date().toDateString()})
        console.log(values)
        if(!values.name && !values.email && !values.qualification){
            setVaild(true)
        }
        else if(values.name &&  !values.email){
            setEmailVaild(true)
        }
        else if(values.email && !values.email.includes("@") && !values.email.includes(".")){
            setEmailVaild(true)
        }
        else if(values.name && values.email && values.email.includes("@") && values.email.includes(".")
        && values.qualification){
            dispatch(newStudent(values));
        }
        // history.push("/")
        // window.location.href="/"
    }
    
useEffect(()=>{
    setsubmitted(true)
},[])

// reset handler
const handleReset=(event)=>{
        event.preventDefault();
       setValue({name:"",email:"",qualification:""})
    }
 
    return (
        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <button type="button" class="btn-close" style={{marginLeft:"480px",backgroundColor:"red"}} data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-content box-color">
                    <div class="modal-body">
                        <div className="flex-box">
            {vaild ? <div className="error-box">
                                <label className="err-text">Please enter a Vaild Name</label>
                                <label className="err-text">please enter  a Vaild Email with @ and .</label>
            </div>:""}
            {submitted && emailVaild  ? <div className="error-box">
                                <label className="err-text">please enter Vaild Email with @ and .</label>
            </div>:""} 
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
                                <select className="input-box" value={values.qualification} onChange={stdQualification}>
                                    <option>please choose</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                            <div className="flex-item btn-action">
                                <button className="btn" onClick={handleSubmit}>Submit</button>
                                <button className="btn reset" onClick={handleReset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(AddForm)
