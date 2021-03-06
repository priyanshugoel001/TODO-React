import React, { Component } from 'react'
export default class Todo extends Component {
    constructor()
    {
        super();
        this.state={
            tasks:[{id:1,txt:'First Task'},{id:2,txt:'Second Task'},{id:3,txt:'Third Task'}],
            currTask:""
        }
    }
    handleChange=(e)=>{
       let val=e.target.value;
       this.setState({
           currTask:val
       })
    }
    handleSubmit=()=>{
        let nta=[...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}];
        this.setState({
           tasks:nta,
           currTask:""
        });
    }
    render() {
        return (
            //JSX
            <div>
                <div className='input-container'>
                    <input type='text' value={this.state.currTask} onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Add</button>
                </div>
                <div className='class-list'>
                    <ul>
                        {
                            this.state.tasks.map(function(tobj){
                                return(
                                    <li>
                                        <h1>{tobj.txt}</h1>
                                        <button>Delete</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}