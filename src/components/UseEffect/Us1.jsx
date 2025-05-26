import React from "react";

function Us1() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data);
      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Us1;
