import React, { useState } from "react";
import ReactDOM from "react-dom";
import { fetchAPI } from "./useFetch";

import "./styles.css";

function App() {
  const [data, setData] = useState("");
  // const { invokeFetch, resData } = useFetch();

  const handleClick = () => {
    // invokeFetch("https://jsonplaceholder.typicode.com/users/1");
    fetchAPI("https://jsonplaceholder.typicode.com/users/1").then(res => {
      console.log("1", res);
      setData(res);
    });
  };

  console.log("2", data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleClick}>Fetch Data</button>
      {data && <h1>{data.name}</h1>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
