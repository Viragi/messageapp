import {useState} from 'react';
import './App.css';
import Form from "react-bootstrap/Form";
import Dialouge from './Dialouge';

function App() {
  const [inputMessage, setinputMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState([]);

  const handleEnterKey = (e) => {
    if (e.charCode === 13) {
      setinputMessage("");
      if (displayMessage.length > 0 && displayMessage[displayMessage.length - 1].name == "Me") {
        let newMessageArr = [...displayMessage[displayMessage.length - 1].message, inputMessage];
        let newObj = {...displayMessage[displayMessage.length - 1], message: newMessageArr};
        let newdisplayMessage = [...displayMessage];
        newdisplayMessage.pop();
        newdisplayMessage.push(newObj);
        setDisplayMessage(newdisplayMessage);
      } else {
        setDisplayMessage([...displayMessage, {name:'Me', message:[inputMessage],time: new Date() }]);
      }
    }
  }
  return (
    <div className="App">
      <div>
        <Form.Control type="text" placeholder="Normal text" value = {inputMessage} onChange = {(e) => setinputMessage(e.target.value)} onKeyPress = {handleEnterKey}/>
      </div>
      <div>
        {displayMessage.map((item) => {
          return (
            <Dialouge data = {item}/>
          )
        } )}
      </div>
    </div>
  );
}

export default App;
