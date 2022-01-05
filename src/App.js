export default function App() {
  let id = 1;
  let name = "ayush";
  let list = ["amul", "ayush"];
  let obj = {id :2 ,name :"amul"}

  return (
    <div>
      <h1>id : {id}</h1>
      <h2>Mera NAAM :{name}</h2>
      <h2>{list}</h2>
      <h2>{obj.name}{obj.id}</h2>
      <h2>i am {name} my id is {id}</h2>
    </div>
  );
}
