import {ADD_TODO,DEL_TODO,CHANGE_INPUT,GET_TODO_LIST,GET_MYLIST} from './action-types'
const defaultState={
  title:"标题",
  data:[
  
]
}
export default (state=defaultState,action)=>{
	let newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
    	case CHANGE_INPUT:
    		newState.title=action.value
    		return newState
    	case ADD_TODO:
    	const obj={title:newState.title}
    		newState.data.push(obj)
    		return newState
    	case DEL_TODO:
    	    newState.data.splice(action.value,1)
    	    return newState
    	case GET_TODO_LIST:
    	console.log(action.data)
    		newState.data=action.data
    		return newState
    	default:
    	
        break;
    }
	return state
}