import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent></Mycomponent>
    </div>
  );
}

function Mycomponent() {
  let [username, setusername] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [registeruser, setregisteruser] = useState([]);

  const handelUsername = (e) => {
    setusername(e.target.value);
  };

  const handelEmail = (e) => {
    setemail(e.target.value);
  };

  const handelPassword = (e) => {
    setpassword(e.target.value);
  };

  const handelRegister = () => {
    const user = {
      username: username,
      email: email,
      password: password,
    };

    let newlist = [user, ...registeruser];

    setregisteruser(newlist);
  };
  return (
    <div>
      <div>
        <h2>Form Registration</h2>
        <div>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handelUsername}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="e-mail"
            value={email}
            onChange={handelEmail}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={handelPassword}
          />
        </div>
        <div>
          <input type="button" value="Register" onClick={handelRegister} />
        </div>

        <hr />
        {registeruser.map((item, index) => (
          <div key={index}>
            {item.username}, {item.password}, {item.email}, {item.mobile}
          </div>
        ))}
      </div>
    </div>
  );
}
