import React from "react"


class Todo extends React.Component {
    handleClick = () => {
        this.props.handleToggle(this.props.thing.id);
    }
    render() {
        return(
            <div key={this.props.thing.id}>
                <strong onClick={this.handleClick}>{this.props.thing.name}</strong>
                {this.props.thing.complete ? <span> : donezo</span> : <span></span>}
            </div>
          )
    }
}

export default Todo;