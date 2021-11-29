import React from 'react';
import './components/Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Todo from './components/Todo';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
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
        {
          name: 'Leave',
          id: 24,
          complete: false,
        },
        {
          name: 'Fight Crime',
          id: 1241,
          complete: false,
        },
        {
          name: 'Create panic in a small town',
          id: 234234,
          complete: false,
      }
      ]
    }
  }
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const { thingsToDo } = this.state;
    return (
      <div className='App'>
        <div className='header'>
          <h1>Procrastinations Doom!</h1>
        </div>
          {thingsToDo.map(thing => {
            return(
              <h4 key={thing.id}>{thing.name} {thing.complete ? <span> : donezo</span> : <span></span>}</h4>
            )
          })}
          <button>Clear all finished tasks</button>
      </div>
    );
  }
}

export default App;
