import { NewStudent,getStudentId,updateStudent,deleteStudent} from "../constant/actionTypes";

// initial data..........
const data={
    data:[
    {
        "id":"01",
        "name":"shashi",
        "email":"shashi@gmail.com",
        "qualification":"MCA",
        "date":"11 jun 2021"
    },
    {
        "id":"02",
        "name":"Rohit",
        "email":"Rohit@gmail.com",
        "qualification":"BCA",
        "date":"12 jun 2021"
    }
],
stddata:null}

// reducers.........
export const reducers=(state=data,action)=>{
    switch(action.type){
        case NewStudent:{
            return{
                data:[action.payload,...state.data]
            }
        }
        case getStudentId:{
            let arr=state.data.filter(data=>data.id===action.payload);
            arr=arr.values();
            for(let val of arr){
                arr=val
            }
            return{
                ...state,
                stddata:arr,
            }
        }
        case updateStudent:{
            return{
                ...state,
                data:state.data.map(data=>data.id===action.payload.id?action.payload:data)       
            }
        }
        case deleteStudent:{
            return{
                ...state,
                data:state.data.filter(data=>data.id !==action.payload)
            }
        }
        default:
            return state
        }
    }

