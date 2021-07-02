import React, { useState } from "react";
import ReactDOM from "react-dom";

/*
 * usInput?
 * (1) input의 value값 지정, 변경 기능
 * (2) validator: 원하는 input값 넣도록 제한 기능
 */
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); //validator 함수에 value넣은 것의 결과를 willUpdate에 집어넣기
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

//////////여기까지가 useInput

function App() {
  const maxLen = (value) => value.length < 10; //true of false
  const including = (value) => !value.includes("@");
  const name = useInput("Ms.", including);

  return (
    <div className="App">
      <h1> Hello </h1>
      <input placeholder="Name" {...name} />
      {/* {...name} == value={name.value} 등등  모든 property를 unpack everythign in 'name'*/}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
