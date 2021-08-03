import "./Todo.css"
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, ListGroupItem } from 'reactstrap';



class Todo extends React.Component {
    constructor (props) {
          super(props);
          this.state = {
              todos:props.todos,
              text:''
          }
    }

    changed = (event) => {
        console.log(event.target.value);
          this.setState({
            text:event.target.value,
          })
        
        }
    addItem = () => {
          console.log(this.state.text);
           
          this.setState((state) => {
            if (state.text !== ''){
            let array=[...state.todos];
            array.push({title:this.state.text});
            return {todos:array,text:''}
        }
          })   
    } 
    deleteItem = (index) => {
        this.setState( (state) => {
         let array = [...state.todos];
         array.splice(index, 1);
         return  { todos: array }
        })
      
}

clearAll = () => {
    this.setState({
         todos:[]
    })
}
// setUpdate(items, key) {
//     const items=this.state.items;
//     items.map(item => {
//         if (item.key===key) {
//             item.text=text;
//         }
//     })
//     this.setState({
//         item:text
//     })
// }
  
    render() {
        
        return (
            
            <div className="rounded overflow-hidden shadow p-3 bg-white">
                    <h1>Todo App</h1>
                    <div className="d-flex align-items-center mb-3">
                    <Input 
                    type="text"  
                    placeholder="new task" 
                    className="me-2" 
                    value={this.state.text}
                    onChange={this.changed}
                    />
                    <Button color="primary" onClick={this.addItem}><FontAwesomeIcon icon={faPlus} /></Button>
                    </div>
                    <ListGroup>
                        {this.state.todos.map((item,index) => {
                           return  <ListGroupItem   
                           tag="a"  
                           href="#" 
                           className="d-flex justify-content-between align-items-center" 
                           key={index} 
                           id={item.key}
                           value={item.text} 
                        //    onChange={(e) => {
                        //        props.setUpdate(e.target.value, item.key)
                        //    }}
                           action >
                           {index + 1}. {item.title} <span>
                           <FontAwesomeIcon className="text-danger fs-5" 
                           onClick={this.deleteItem.bind(this,index)} icon={faTrash} /></span></ListGroupItem>
                        })}
                    </ListGroup>

                    <div className="d-flex justify-content-between mt-3 p-2 align-items-center">
                        <p>You have <span>{this.state.todos.length}</span> pending tasks</p>
                        <Button color="primary" onClick={this.clearAll}>Clear All</Button>
                    </div>
             </div> 
           
        );
    }
}


export default Todo;
