import { useState } from "react";
export default function App() {
  return (
    <div>
      <Mycomponent></Mycomponent>
    </div>
  );
}

function Mycomponent() {
  const [msg,setMsg] = useState();
  const [list ,setlist] = useState([])

  const changeMsg = (e)=>{
    setMsg(e.target.value);
  }

  const tweet= ()=>{
      const newlist = [msg, ...list];
    setlist(newlist);
    setMsg("")
  }

  const deleteTweet = ()=>{
      list.splice(0,1);
      setlist([...list]);
  }
  return (
    <div>
      <div>
        <h1>Working with Input and delete event</h1>
        <input type="text" value={msg} onChange={changeMsg} />
        <input type="button" value="Tweet" onClick={tweet} />
        <input type="button"  value="Delete tweet" onClick={deleteTweet}/>
        <div id="parent">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      </div>
    </div>
  );
}
