import React from "react";
import Todo from "./Todo";


class TodoList extends React.Component {
    render() {
        return(
            <div>
                {this.props.thingsToDo.map(thing => {
                    return(
                        <Todo handleToggle={this.props.handleToggle} thing={thing} key={thing.id} />
                    )
              })}
            </div>
        )
    }
}

export default TodoList;