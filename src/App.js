import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent></Mycomponent>
    </div>
  );
}

function Mycomponent() {
  let [ajaxlist, setajaxlist] = useState([]);
  const ajaxcall = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    let response = await fetch(url);
    let result = await response.json();
    setajaxlist(result);
  };
  return (
    <div>
      <div>
        <h4></h4>
        <input type="button" value="Ajax call" onClick={ajaxcall} />

        {ajaxlist.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
