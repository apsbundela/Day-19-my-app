import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycompenent></Mycompenent>
    </div>
  );
}

function Mycompenent() {
  
  let[counter,setcounter] = useState(1)

  const increment = ()=>{

    counter = counter+1;
    setcounter(counter)
  }

  const decrement = ()=>{

      counter = counter-1;
      setcounter(counter);
  }

  return (
    <div>
      <div><h1>{counter}</h1></div>
      <input type="button" value="Counter &#128077;" onClick={increment}/>
      <input type="button" value="Counter &#128078;" onClick={decrement}/>
    </div>
  );
}
