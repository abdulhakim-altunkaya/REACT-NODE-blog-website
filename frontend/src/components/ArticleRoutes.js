import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ArticleRoutes = () => {
  const {id} = useParams();
  const [dataArticleX, setDataArticleX] = useState([]);
  useEffect(() => {
    fetch(`/articles/${id}`)
    .then(res => res.json())
    .then(data => {
      setDataArticleX(data);
    });
  }, [id]);
  return(
    <div>{
      dataArticleX.map(result => (
        <div className="articleView" key={result._id}>
          <h2>{result.articleTitle}</h2>
          <p>Written by: {result.articleAuthor}</p>
          <p className="articleView2" >{result.articleText}</p>
          <h5>{result.articleDate}</h5>
        </div>
      ))
    }</div>
  );
}

export default ArticleRoutes;
