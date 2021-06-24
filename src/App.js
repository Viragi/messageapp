import {useState} from 'react';
import './App.css';
import Form from "react-bootstrap/Form";

function App() {
  const [inputMessage, setinputMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState([]);

  const handleEnterKey = (e) => {
    console.log(e.charCode);
    if (e.charCode === 13) {
      setinputMessage("");
      setDisplayMessage([...displayMessage,inputMessage]);
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
            <div>
              {item}
            </div>
          )
        } )}
      </div>
    </div>
  );
}

export default App;
