import react from 'react'
import './App.css';
import UserList from "./components/UserList";
import DigitalWatch from "./components/DigitalWatch";

function App() {
  return (
    <div className="App">
      <UserList/>
      <DigitalWatch/>
    </div>
  );
}

export default App;
