import React from 'react';
import { Button,Input,List } from 'antd';
import './App.css';
import store from './redux/store'
import {changeinput,addtodo,deltodo,getList,getMyList} from './redux/actions'

 
class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state=store.getState()
	  store.subscribe(this.storeChange)
	}
	change=(e)=>{
      const action=changeinput(e)
      store.dispatch(action)
	}
	addList=()=>{
		const action=addtodo()
		store.dispatch(action)
        console.log(this.name.props.value)
	}
	delToDo=(e)=>{
		const action=deltodo(e)
		store.dispatch(action)
		// console.log(e.target.getAttribute('data-index'))
	}
	storeChange=()=>{
		this.setState(
			store.getState()
		)
		console.log(store.getState())
	}
	UNSAFE_componentWillMount(){
		this.getToDoList()
	}
	getToDoList=()=>{
		// getList()()
		const action=getMyList()
		store.dispatch(action)
	}
	render(){	
		return (
    <div className="App">
       <Input type="text" value={this.state.title} onChange={this.change} ref={el=>this.name=el}/>
       <Button type="primary" onClick={this.addList}>添加</Button>
	   <List
      size="small"
      bordered
      dataSource={this.state.data}
      renderItem={(item,index) => <List.Item><span style={{marginRight:'20px'}}>{item.title}</span><Button type="danger" data-index={index} onClick={this.delToDo}>删除</Button></List.Item>}
     />
    </div>
               )
	}
}

export default App;
// const stateToProps=(state)=>{
// 	return{
// 		inputValue:state.inputValue
// 	}
// }
// const dispatchToProps=(dispatch)=>{
// 	return{
// 		const action={

// 		}
// 		dispatch(action)
// 	}
// }
// export default connect(stateToProps,dispatchToProps)(App)