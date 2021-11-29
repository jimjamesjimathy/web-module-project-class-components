import React from "react"


class Todo extends React.Component {
    render() {
        return(
            <div key={this.props.thing.id}>
                <strong>{this.props.thing.name}</strong>
                {this.props.thing.complete ? <span> : donezo</span> : <span></span>}
            </div>
          )
    }
}

export default Todo;