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
          name: 'Wash your head',
          id: 420,
          complete: false,
        },
        {
          name: 'Eat a lettuce',
          id: 19240,
          complete: false,
        },
      ]
    }
  }

  handleAdd = (name) => {
    // 1. SetState
    // 2. Change thingsToDo
    // 3. Make a copy of thingsToDo
    // 4. Add a new thingsToDo to the end of the thingsToDo object

    const newThing = {
      name: name,
      id: 23521,
      complete: false
    }
    this.setState({
      ...this.state, 
      thingsToDo: [...this.state.thingsToDo, newThing]
    });
  }

  handleClear = () => {
    // 1. Set State
    // 2. Loop through all thingsToDo
    // 3. Remove all completed thingsToDo
    // 4. Save filtered thingsToDo

    this.setState({
      ...this.setState,
      thingsToDo: this.state.thingsToDo.filter(things => {
        return (things.complete === false);
      })
    })
  }

  handleToggle = (clickedId) => {
    // 1. SET STATE!!
    // 2. Change thingsToDo
    // 3. Find the ThingsToDo the was clicked on and changed value of complete
    // 4. Keep all other thingsToDo the same.
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
