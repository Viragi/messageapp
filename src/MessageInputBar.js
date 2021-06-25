import {useState} from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function MessageInputBar({handleGifButton, handleMessage}){
    const [inputMessage, setinputMessage] = useState("");
    const onEnter = (e) => {
        if (e.charCode == 13) {
            setinputMessage("");
            handleMessage(inputMessage);
        }
    }
    return (
        <div>
        <InputGroup>
          <Form.Control type="textarea" value = {inputMessage} onChange = {(e) => setinputMessage(e.target.value)} onKeyPress = {(e) => onEnter(e)}/>
          <Button variant="outline-secondary" onClick = {handleGifButton}>Gif</Button>
        </InputGroup>
      </div>
    )
}
