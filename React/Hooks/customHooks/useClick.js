import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  if (typeof onClick !== "function") return;
  const element = useRef();
  useEffect(() => {
    //mount가 되었을 때 한번만 addEventListner 붙이기
    if (element.current) {
      //존재하는지 먼저 확인
      element.current.addEventListener("click", onClick);
    } //mount시에는 아무 function도 리턴하지 않음!!!
    return () => {
      //componentWillUnMount때 리턴되는 function. (unmount되었을 때 더이상 안쓰게 된 listener를 제거하기 위함)
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element; //reference를 리턴했기 때문에 가능
};

function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
