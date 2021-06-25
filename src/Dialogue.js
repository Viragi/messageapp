
export default function Dialogue({ data: {user,message,time, avatar} }){
    let messElem = message.map((item,i) => {
        if (item.slice(0,5) == 'https') {
            return (<div key = {`${i}mess`}> <img src = {item}/></div>)
        }
        return ( <p key = {`${i}mess`}> {item} </p> )
    })
    let hour = time.getHours();
    let mins =  time.getMinutes()
    return (
        <div className = 'dialouge'>
             <img src = {avatar} className = "avatar"/>
            <div className = 'messageContent'>
                <div className = 'dialouge'> 
                    <div className = "boldStyle"> {user} </div>
                    <div className = "timeStyle"> {hour < 10 ? `0${hour}` : hour}:{mins}{hour < 12 ? ' AM' : 'PM'}</div>
                </div>
                <p> {messElem} </p>
            </div>
        </div>
    )
}