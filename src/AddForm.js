import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handlechange = (e) => {

        this.setState({
            content: e.target.value
        })
    }

    handlesubmit = (e) => {
        e.preventDefault()

        this.props.addtodo(this.state)
        this.setState({
            content: ''
        })

    }
    render() {
        return (<div>
            <form onSubmit={this.handlesubmit}>
                <label > What do you want to do:</label>
                <input type="text" onChange={this.handlechange} value={this.state.content} />
            </form>
        </div>);
    }
}

export default AddTodo;