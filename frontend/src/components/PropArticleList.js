const PropArticleList = (props) => {
  const exportArticles = props.exportArticles;
  const handleDelete3 = props.handleDelete2;
  return(
    <div>
      {
        exportArticles.map(result => (
          <div key={result._id}>
            <h2>{result.articleTitle}</h2>
            <p>Written by: {result.articleAuthor}</p>
            <button onClick={() => handleDelete3(result._id)}>Delete Article</button>
          </div>
        ))
      }
    </div>
  );
}

export default PropArticleList;
