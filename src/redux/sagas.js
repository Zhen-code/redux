import {takeEvery,put} from 'redux-saga/effects'
import {GET_MYLIST} from './action-types'
import {getListAction} from './actions'
import axios from 'axios'
// saga中间件
function* mySagas(){
	yield takeEvery(GET_MYLIST,getList)
}
function* getList(){
	// axios.get('https://douban.uieee.com/v2/book/search?q=虚构类&count=8').then(res=>{
	// 		const data=res.data.books
	// 		const action=getListAction(data)
	// 		put(action)
	// 	}).catch(err=>{
	// 		console.log(err)
	// 	})
	const res=yield axios.get('https://douban.uieee.com/v2/book/search?q=虚构类&count=8')
	console.log(res.data.books)
	const action=getListAction(res.data.books)
	yield put(action)
}
export default mySagas