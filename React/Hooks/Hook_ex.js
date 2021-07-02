import React, { useEffect, useState } from "react";
import "./styles.css";
import Axios from "axios";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await Axios.get(url);
      throw Error();
      setPayload(data);
    } catch {
      setError("😞");
    } finally {   //에러 유무 상관 없이 실행 
      setLoading(false);
    }
  };

  useEffect(() => {
    // did mount + did update
    callUrl();
  }, []); // 뒤에 [] 넣기 == component가 did mount(not update)를 할 때 이 함수를 불러라

  return { payload, loading, error };
}

export default function App() {
  const name = useInput("");
  const { payload, loading, error } = useFetch("http://aws.random.cat/meow");
  console.log(payload, loading, error);
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <input {...name} placeholder="what's your name" />
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>error</span>}
      {!loading && payload && <img src={payload.file} />}
    </div>
  );
}
