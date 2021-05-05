import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import axios from 'axios'
import { composeWithDevTools } from "redux-devtools-extension"
//Student
const initialState={
    stud: []
}
const studReducer=(state=initialState,action)=>{
    switch(action.type){
        case "showstud" : return{stud: action.payload}
        default: return state
    }
}

//teacher
const initialStat={
    teach: []
}
const teachReducer=(state=initialStat,action)=>{
    switch(action.type){
        case "showteach" : return{teach: action.payload}
        default: return state
    }
}

//combine reducer
const rootreducer = combineReducers({
    stud: studReducer,
    teach: teachReducer
})

export const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)));

export const getStud=(stud)=>{
    return{
        type : "showstud",
        payload : stud
    }
}
export const fetchStud=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/students").then(res=>{
            dispatch(getStud(res.data))
            console.log(res.data)
        })
    }
}

export const getTeach = (teach) => {
    return{
        type:"showteach",
        payload: teach
    }
}


export const fetchTeach=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/teachers").then(res=>{
            dispatch(getTeach(res.data))
            console.log(res.data)
        })
    }

}