import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;
  const nameInput = useRef();

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, //inputs 객체 복사해와서
      [name]: value, //key가 name인 값을 value로 설정
    });
  };
  const onReset = (e) => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        placeholder="이름"
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        onChange={onChange}
        placeholder="닉네임"
        value={nickname}
        ref={nameInput}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          이름(닉네임): {name}({nickname})
        </b>
      </div>
    </div>
  );
}

export default InputSample;
