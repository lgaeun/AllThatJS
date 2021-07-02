import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  //   console.log(
  //     `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  //   );
  return (
    <div className="App">
      {/* data가 있으면 status 표시 */}
      <h1>{data && data.status}</h1>
      {/* loading중이면 loading 표시  */}
      <h2>{loading && "Loading"} </h2>
      <button onClick={refetch}>Fetch Again</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
