import React, { Component } from 'react';

export default class ReferenceDemoComponent extends Component{

    constructor(props)
    {
        super(props);

        this.setState({
            studentName:''
        });
    }

    displayName(e)
    {
       document.getElementById('showHere').innerHTML = this.inputDemo.value;
    }

    render(){
    return(<div>
    <label>reference Component</label>
    Name: <input type="text" ref={input => this.inputDemo = input}/>
    <br/>
    <button onClick={(e) => this.displayName(e)} className="btn btn-primary">Show Text</button>
    <br/>
    Show Here: <span id="showHere"></span>
    </div>)
    }
}