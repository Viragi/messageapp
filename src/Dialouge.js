
export default function Dialouge({ data: {user,message,time} }){
    let messElem = message.map((item,i) => {
        if (item.slice(0,5) == 'https') {
            return (<div key = {`${i}mess`}> <img src = {item}/></div>)
        }
        return ( <p key = {`${i}mess`}> {item} </p> )
    })
    return (
        <div>
            {/* <img src = {}/> */}
            <div> {user} </div>
            <div> {messElem} </div>
        </div>
    )
}