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
      setError("๐");
    } finally {   //์๋ฌ ์ ๋ฌด ์๊ด ์์ด ์คํ 
      setLoading(false);
    }
  };

  useEffect(() => {
    // did mount + did update
    callUrl();
  }, []); // ๋ค์ [] ๋ฃ๊ธฐ == component๊ฐ did mount(not update)๋ฅผ ํ  ๋ ์ด ํจ์๋ฅผ ๋ถ๋ฌ๋ผ

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
