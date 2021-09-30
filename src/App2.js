import React,{useState,useEffect} from 'react'
import EmojiData from './emoji.json'

const App = () => {
  const [search,setSearch] = useState("");
  const changehandler = e =>{
    setSearch(e.target.value);
  }
  
  useEffect(()=>{
    console.log(search)
  },[search])

  return (
    <div>
      <center>

          <h2> Emoji Search </h2>
          
          <input type="text" value={search} onChange={changehandler}/><br /><br />

          {EmojiData.map(emoji => <li>{emoji.symbol} {emoji.title}</li>)}
  
        </center>
    </div>
  )
}

export default App


