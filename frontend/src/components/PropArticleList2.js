import {Link} from "react-router-dom";

const PropArticleList2 = (props) => {
  const exportArticles = props.exportArticles;
  return(
    <div>{
      exportArticles.map(result => (
        <div className="articlePreview" key={result._id}>
          <Link style={{ textDecoration: 'none', color: "black" }} to={`/articles/${result._id}`}>
            <h2>{result.articleTitle}</h2>
            <p>Written by: {result.articleAuthor}</p>
          </Link>
        </div>
      ))
    }</div>
  );
}
export default PropArticleList2;
