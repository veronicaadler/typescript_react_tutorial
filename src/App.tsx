import { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState { //interface IState is used to declare the types for more complex
  //types of state
  people: {
    name: string
    age: number
    url: string
    note?: string //optional fields are denoted with a ?
  }[] //this empty array indicates that people will be an array of objects
}

function App() {

  const [ number, setNumber ] = useState< number | string >(5) //indicating here that
  //we wish to allow the state to either be a number or a string
  //if it was just number, you could allow typescript to infer the type.
  //you don't really need to declare it unless you want to allow for multiple options

  const [ people, setPeople ] = useState<IState['people']>([{
    name: 'Lebron James',
    age: 36,
    url: '',
    note: 'Allergic to staying on the same team.' //optional fields are denoted with a ?
  }])

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>

    </div>
  );
}

export default App;
