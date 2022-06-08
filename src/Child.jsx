import {Component } from "react";
import { Context } from "./state/ContextProvider";
import { observer } from "mobx-react";
import {toJS} from "mobx"



class Child extends Component{

  static contextType = Context;

  render(){
    const {todo} = toJS(this.context);
    console.log(todo);
  
    return <div>
        {todo.map(({id, name}) => <div key = {id}>{name}</div>)}
      <button onClick={() => this.context.addTodo()}>Increment</button>
    </div>
  }
}

export default observer(Child);