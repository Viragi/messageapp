import {useState, useEffect} from 'react';

export default function useGiphy(){
    const [gifData, setGifData] = useState([]);

    useEffect(() => {
      fetch(`http://api.giphy.com/v1/gifs/trending?api_key=RGg1PKJeFM6XYAmzmv2BHhzeCjhEU6lg`).then(res => res.json()).then((res) => {
        setGifData(res.data);
      }).catch((e)=> console.error(e, "error"))
    },[])

    return gifData;
}