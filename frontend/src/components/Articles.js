import PropArticleList2 from "./PropArticleList2";
import useFetch from "./useFetch.js";

const Articles = () => {
  const {dataArticle3, isLoading, errMes} = useFetch("/articles")


  return(
    <div>
      {errMes && <p>{errMes}</p>}
      {isLoading && <p>Loading...</p>}
      {dataArticle3 && <PropArticleList2 exportArticles = {dataArticle3}/>}
    </div>
  )
}

export default Articles;
