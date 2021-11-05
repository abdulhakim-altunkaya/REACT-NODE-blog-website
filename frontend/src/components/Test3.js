import {useEffect, useState} from "react";
import PropArticleList from "./PropArticleList";

const Test3 = () => {
  const [dataArticle4, setDataArticle4] = useState([]);
  useEffect(() => {
    fetch("/articles")
    .then(res => res.json())/*We need convert raw object into json object. Because javascript can only parse json objects.*/
    .then(data => {
      setDataArticle4(data)
    })
  }, [])

  const handleDelete1 = (id) => {
    const filteredArticles = dataArticle4.filter(records => records._id !== id);
    setDataArticle4(filteredArticles);
  }

  return(
    <div>
      {dataArticle4 && <PropArticleList handleDelete2={handleDelete1} exportArticles = {dataArticle4.filter((records) => records.articleAuthor === "Leonidas" )}/>}
    </div>
  );
}

export default Test3;
