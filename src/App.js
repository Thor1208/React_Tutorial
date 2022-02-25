import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Greet name="Vijay" heroName="Thor">
        <p>Children Props</p>
      </Greet> */}
      {/* <Greet name="Pratik" heroName="IronMan">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Aaron" heroName="Spiderman"></Greet> */}
      {/* <Welcome name="Vijay" heroName="Thor"></Welcome> */}
      {/* <Welcome name="Pratik" heroName="IronMan"></Welcome> */}
      {/* <Welcome name="Aaron" heroName="Spiderman"></Welcome> */}
      {/* <Hello></Hello> */}
    </div>
  );
}

export default App;
