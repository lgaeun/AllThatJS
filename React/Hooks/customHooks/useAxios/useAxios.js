import { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  //instance가 없으면 axios의 기본것 사용
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  /* refetch 기능 : trigger라는 state를 변경해 refetch 트리거시키기*/
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now()); // date관련 random 숫자 넣어서 trigger변경
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]); //trigger update되면 다시 axios fetch하기

  return { ...state, refetch };
};

export default useAxios;
