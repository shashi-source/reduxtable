import { combineReducers } from "redux";
import {reducers}  from "./newStudentReducer";


export default combineReducers({
    data:reducers
})