import store from './store'
import {ADD_TODO,DEL_TODO,CHANGE_INPUT,GET_TODO_LIST,GET_MYLIST} from './action-types'
import axios from 'axios'
export const changeinput=(e)=>({type:CHANGE_INPUT,value:e.target.value})

export const addtodo=()=>({type:ADD_TODO})

export const deltodo=(e)=>({type:DEL_TODO,value:e.target.getAttribute('data-index')})

export const getListAction=(data)=>({type:GET_TODO_LIST,data:data})

export const getList=()=>{
	return ()=>{
		// thunk中间件
		axios.get('https://douban.uieee.com/v2/book/search?q=虚构类&count=8').then(res=>{
			const data=res.data.books
			const action=getListAction(data)
			store.dispatch(action)
		}).catch(err=>{
			console.log(err)
		})
	}
}
export const getMyList=()=>({
	type:GET_MYLIST
})