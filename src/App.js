import React from 'react';
import './components/Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      thingsToDo: [
        {
          name: 'Eat a lettuce',
          id: 19240,
          complete: false,
        },
      ]
    }
  }
                          // Handle adding new todo
  handleAdd = (name) => {
    const newThing = {
      name: name,
      id: Math.floor(Math.random() * 9999999999999),
      complete: false
    }
    this.setState({
      ...this.state, 
      thingsToDo: [...this.state.thingsToDo, newThing]
    });
  }
                        // handle clearing all tasks that are completed 
  handleClear = () => {
    this.setState({
      ...this.setState,
      thingsToDo: this.state.thingsToDo.filter(things => {
        return (things.complete === false);
      })
    })
  }
                      // handle toggling of the clicked task to make complete or not complete
  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      thingsToDo: this.state.thingsToDo.map(things => {
        if(things.id === clickedId){
          return {
            ...things,
            complete: !things.complete
          }
        }
        return things;
      })
    })
  }
  render() {
    const { thingsToDo } = this.state;
    return (
      <div className='App'>
        <div className='header'>
          <h1>Procrastinations Doom!</h1>
          <TodoForm handleAdd={this.handleAdd} />
        </div>
          <TodoList thingsToDo={thingsToDo} handleToggle={this.handleToggle}/>
          <button onClick={this.handleClear}>Clear all finished tasks</button>
      </div>
    );
  }
}

export default App;
