import React from "react"


class Todo extends React.Component {
    handleClick = () => {
        this.props.handleToggle(this.props.thing.id);
    }
    render() {
        return(
            <div>
                <h3 onClick={this.handleClick}>~ {this.props.thing.name}</h3>
                {this.props.thing.complete ? <span> : donezo</span> : <span></span>}
            </div>
          )
    }
}

export default Todo;