import {useState, useEffect} from "react";
const useFetch =  (url) => {
  const [dataArticle3, setDataArticle3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMes, setErrMes] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) {
        throw Error("Route address is typed wrong, check relevant component in React folder")
      }
      return res.json();
    })
    .then(data => {
      setDataArticle3 (data);
      setIsLoading (false);
      setErrMes(null);
    })
    .catch(err => {
      if (err.name === "AbortError") {
        console.log("cleanup function. Abort Error. You are changing pages too fast. Be slower.");
      } else {
        setErrMes (err.message)
        setIsLoading (false);
      }
    });
    return () => abortCont.abort();
  }, [url])
  return{dataArticle3, isLoading, errMes};
}

export default useFetch;
