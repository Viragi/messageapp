import {useState, useEffect} from 'react';
import GifDisplay from './GifDisplay';
import MessageInputBar from './MessageInputBar';
import './App.css';
import MessageBody from './MessageBody';
const RandomUserData = require( './data.json').randomUsers;

function App() {
  const [displayMessage, setDisplayMessage] = useState([]);
  const [gifData, setGifData] = useState([]);
  const [showGifBox, setShowGifBox] = useState(false);
  
  const updateDisplayMessage = ({user, message, time} ) => {
    setDisplayMessage((displayMessage) => [...displayMessage, {user, message:[message],time }]);
  }

  useEffect(() => {
    setInterval(() => {
      let randomIndex = Math.floor(Math.random() * (RandomUserData.length));
      updateDisplayMessage({...RandomUserData[randomIndex], time: new Date()})
    }, 10000);
  }, [])

  useEffect(() => {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=Awq5410QQl0416nJogqlsinldM2s9PCA`).then(res => res.json()).then((res) => {
      setGifData(res.data);
    }).catch((e)=> console.log(e, "error"))
  },[])

  const handleMessage = (inputMessage) => {
    updateDisplayMessage({user: "Me",message: inputMessage, time: new Date()});
  }

  const handleGifClick = (url) => {
    setShowGifBox(false)
    updateDisplayMessage({user: "Me",message: url, time: new Date()})
  }

  return (
    <div className="App">
      <MessageInputBar handleGifButton= {()=>setShowGifBox(true)} handleMessage = {handleMessage}/>
      <MessageBody displayMessage = {displayMessage}/>
     {showGifBox && <GifDisplay data = {gifData} handleGifClick = {handleGifClick}/>} 
    </div>
  );
}

export default App;
