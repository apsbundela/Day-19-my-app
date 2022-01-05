import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent></Mycomponent>
    </div>
  );
}

function Mycomponent() {
  let [msg, setmsg] = useState("");
  let [list, setlist] = useState([]);

  const processmsg = (e) => {
    setmsg(e.target.value);
  };

  const sendmsg = () => {
    let newlist = [msg, ...list];
    setlist(newlist);
    setmsg("");
    console.log(msg);
  };
  return (
    <div>
      <h2>Input Practice</h2>
      <input type="text" value={msg} onChange={processmsg} />
      <input type="button" value="send" onClick={sendmsg} />

      {list.map((item) => (
          <div>{item}</div>
        ))}
  
    </div>
  );
}
