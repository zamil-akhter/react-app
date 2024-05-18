import './App.css';

import Person from './person';
import Man from './man';
import Userdata from './userdata';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey There</h1>
        <h1>This is Zamil Akhter</h1>
        <Person name="Zamil Akhter"/>
        <Person name="Divyam"/>
        <Man number="1"/>
        <Userdata/>
      </header>
    </div>
  );
}

export default App;
