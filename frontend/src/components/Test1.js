import {useEffect, useState} from "react";

const Test1 = () => {
  const [dataArticle2, setDataArticle2] = useState([]);
  useEffect(() => {
    fetch("/test1")
    .then(res => res.json())
    .then(data => {
      setDataArticle2(data);
    });
  }, []);
  return(
    <div>
      {
      dataArticle2.map(result =>(
        <p key={result._id}>{result.articleTitle}</p>
      ))
      }
    </div>
  );
}

export default Test1;
