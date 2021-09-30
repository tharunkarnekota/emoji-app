import React,{useState,useEffect} from 'react'
import EmojiData from './emoji.json'

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const changehandler = e =>{
    setSearch(e.target.value);
  }
  
  useEffect(()=>{
    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
    setData(newData);
  },[search])

  return (
    <div>
      <center>

          <h2> Emoji Search </h2>
          
          <input type="text" value={search} onChange={changehandler}/><br /><br />

          {data.map(emoji => 
          <div> 
            <div class="card">
              <div class="card-body" onClick={()=> {navigator.clipboard.writeText(emoji.symbol);alert("emoji copied")}}>
                {emoji.symbol} {emoji.title};
              </div>
            </div>
          </div>
            )}
        </center>
    </div>
  )
}

export default App


