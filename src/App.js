export default function App() {
  let list = [1, 2, 3, 34, 4, , 6, 7, 8, 9, 0, 2, 4, 65, 7];
  return (
    <div>
      {list.map(() => (
        <Mycomponent></Mycomponent>
      ))}
      ;
    </div>
  );
}

function Mycomponent() {
  let color = "bg-success ";
  return (
    <div className={color}>
      <h2>Header</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi in
        suscipit at rerum harum libero corporis blanditiis enim nulla.
      </p>
    </div>
  );
}
