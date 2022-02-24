import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message></Message>
      {/* <Greet name="Vijay" heroName="Thor">
        <p>Children Props</p>
      </Greet>
      <Greet name="Pratik" heroName="IronMan">
        <button>Action</button>
      </Greet>
      <Greet name="Aaron" heroName="Spiderman"></Greet>
      <Welcome name="Vijay" heroName="Thor"></Welcome>
      <Welcome name="Pratik" heroName="IronMan"></Welcome>
      <Welcome name="Aaron" heroName="Spiderman"></Welcome>
      <Hello /> */}
    </div>
  );
}

export default App;
