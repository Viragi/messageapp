import {useState, useEffect} from 'react';
import MessageInputBar from './MessageInputBar';
import './App.css';
import MessageBody from './MessageBody';
import useGiphy from './useGiphy';
const RandomUserData = require( './data.json').randomUsers;

function App() {
  const user = "Me";
  const gifData = useGiphy();

  const [displayMessage, setDisplayMessage] = useState([]);

  const updateDisplayMessage = ({user, message, time, avatar} ) => {
    setDisplayMessage((displayMessage) => [...displayMessage, {user, message:[message], time, avatar}]);
  }
  const handleMessage = (inputMessage, type) => {
    updateDisplayMessage({user: user,message: inputMessage, time: new Date(), avatar: "https://gravatar.com/avatar/b5b4aa2195956a0eca3cc1fada2c5d76?s=200&d=robohash&r=x"});
  }

  useEffect(() => {
    setInterval(() => {
      let randomIndex = Math.floor(Math.random() * (RandomUserData.length));
      updateDisplayMessage({...RandomUserData[randomIndex], time: new Date()})
    }, 10000);
  }, [])
  
  return (
    <div className="App">
      <MessageInputBar handleMessage = {handleMessage} gifData = {gifData} />
      <MessageBody displayMessage = {displayMessage}/>
    </div>
  );
}

export default App;
