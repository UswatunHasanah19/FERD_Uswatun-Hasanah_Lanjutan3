import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState={
    value:"",
    arr:[],
    inPro:[],
    eva:[],
    done:[]
}
const kanbanBoard = (state = initialState, action) =>{
    switch (action.type) {
        case "CHANGE":
            return { ...state, value: action.payload}
        case "BACKLOG":
            return { ...state, arr: state.arr.concat(action.payload)}
        case "INPROGRESS":
            return { ...state, arr: action.nArr, inPro: state.inPro.concat(action.payload)}
        case "EVALUATION":
            return { ...state, inPro:action.nInpro,eva: state.eva.concat(action.payload)}
        case "DONE":
            return { ...state, eva:action.nEva, done: state.done.concat(action.payload)}
        default:
            return state
    }
}

const store = createStore(kanbanBoard, applyMiddleware(thunk, logger))

export default store;


