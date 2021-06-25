import {useState, useEffect} from 'react';

export default function useGiphy(){
    const [gifData, setGifData] = useState([]);

    useEffect(() => {
      fetch(`http://api.giphy.com/v1/gifs/trending?api_key=Awq5410QQl0416nJogqlsinldM2s9PCA`).then(res => res.json()).then((res) => {
        setGifData(res.data);
      }).catch((e)=> console.error(e, "error"))
    },[])

    return gifData;
}