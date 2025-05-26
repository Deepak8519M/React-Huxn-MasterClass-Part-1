import React, { useState, useEffect } from "react";

function FetchDataEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>First Post Title</h1>
      {data.length > 0 ? <h3>{data[0].body}</h3> : <p>No Data Fetched</p>}
    </div>
  );
}

export default FetchDataEffect;
