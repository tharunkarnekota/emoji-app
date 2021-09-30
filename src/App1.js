import React,{useState,useEffect} from 'react'

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
  
        </center>
    </div>
  )
}

export default App


