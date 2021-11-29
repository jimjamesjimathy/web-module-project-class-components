import React from "react"


class Todo extends React.Component {
    render() {
        return(
            <h3 key={this.props.thing.id}>
                {this.props.thing.name} {this.props.thing.complete ? <span> : donezo</span> : <span></span>}
            </h3>
          )
    }
}

export default Todo;