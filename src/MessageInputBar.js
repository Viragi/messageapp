import {useState} from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import GifDisplay from './GifDisplay';

export default function MessageInputBar({handleMessage, gifData}){
    const [inputMessage, setinputMessage] = useState("");
    const onEnter = (e) => {
        if (e.charCode == 13) {
            setinputMessage("");
            handleMessage(inputMessage);
        }
    }
    const [showGifBox, setShowGifBox] = useState(false);
    const handleGifClick = (url) => {
        setShowGifBox(false)
        handleMessage(url);
    }
    return (
        <div className = 'messageInputBar'>
            {showGifBox && <GifDisplay data = {gifData} handleGifClick = {handleGifClick}/>} 
            <InputGroup>
                <Form.Control type="textarea" size="lg" value = {inputMessage} onChange = {(e) => setinputMessage(e.target.value)} onKeyPress = {(e) => onEnter(e)}/>
                <Button variant="secondary" size="lg" onClick = {()=>{setShowGifBox(showGifBox=>!showGifBox)}}>Gif</Button>
            </InputGroup>
      </div>
    )
}
