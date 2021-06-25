import Dialogue from './Dialogue';

export default function MessageBody({displayMessage}){

    let groupMessage = displayMessage.reduce((prev, curr) => {
        if (prev.length > 0 && curr.user == prev[prev.length - 1].user) {
           prev[prev.length - 1].message.push(...curr.message);
           prev[prev.length - 1].time = curr.time;
           return prev;
        } else {
          let newMessage = [...curr.message]
          let newCurr = {...curr, message: newMessage}
           prev.push(newCurr);
           return prev
        }
      }, []).reverse();
    return (
        <div className = "messagesList">
        {groupMessage && groupMessage.map((item, i) => {
          return (
            <Dialogue data = {item} key = {i+"dial"}/>
          )
        } )}
      </div>
    )
}