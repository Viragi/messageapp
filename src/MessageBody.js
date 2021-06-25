import Dialouge from './Dialouge';

export default function MessageBody({displayMessage}){

    let groupMessage = displayMessage.reduce((prev, curr) => {
        if (prev.length > 0 && curr.user == prev[prev.length - 1].user) {
           prev[prev.length - 1].message.push(...curr.message);
           return prev;
        } else {
          let newMessage = [...curr.message]
          let newCurr = {...curr, message: newMessage}
           prev.push(newCurr);
           return prev
        }
      }, []);
    return (
        <div>
        {groupMessage && groupMessage.map((item, i) => {
          return (
            <Dialouge data = {item} key = {i+"dial"}/>
          )
        } )}
      </div>
    )
}