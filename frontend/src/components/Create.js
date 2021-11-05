import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";


const Create = () => {

  const [requireAuth, setRequireAuth] = useState(false);
  useEffect(() => {
    fetch("/create")
    .then((res) => {
      if (res.status === 200) {
        setRequireAuth(true)
      } else {
        setRequireAuth(false)
      }
    });
  }, []);

  const [articleTitle, setArticleTitle] = useState("");
  const [articleText, setArticleText] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  //this code first get full date with time zone, then it splits it into two and grab only the date
  const newDate = new Date();
  const newDate2 = newDate.toISOString().split('T');
  const [articleDate, setArticleDate] = useState(newDate2[0]);
  //This will redirect us to articles page
  const myHistory = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newArticle = { articleTitle, articleAuthor, articleText, articleDate};
    setIsLoading(true);
    fetch("/create", {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify(newArticle)
    }).then((res) => {
      if (res.status === 200) {
        console.log("article saved");
      } else {
        console.log("article creation failed");
      }
      setIsLoading(false);
      myHistory.push("/articles");
    })
  }
  return(
    <div className="createArticle">
      {requireAuth && <div>
        <h2>Write a new Article</h2>
        <form onSubmit={handleSubmit}>
          <label>Article Title: </label>
          <input
            type="text"
            required
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}/>
          <label>Article Author</label>
          <select
            required
            value={articleAuthor}
            onChange={(e) => setArticleAuthor(e.target.value)}>
            <option value="CEO Abdulhakim Altunkaya">CEO Abdulhakim Altunkaya</option>
            <option value="Sir Sedat Taşkıran">Sir Sedat Taşkıran</option>
            <option value="Primer Minister Abdulhakim Altunkaya">Primer Minister Abdulhakim Altunkaya</option>
          </select>
          <label>Article Text: </label>
          <textarea
            required
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}>
          </textarea>

          <input
            type="text"
            value={articleDate}
            style={{display:"none"}}
            onChange={(e) => setArticleDate(e.target.value)}/>
          {/*onChange up here is not needed actually, but if I dont use, then a yellow error happens, saying, useState is assigned a value but never used*/}
          {isLoading && <button disabled>Saving...</button>}
          {!isLoading && <button>Save Article</button>}
        </form>
      </div>}
      {!requireAuth && <div>You need to login sir</div>}
    </div>
  );
}

export default Create;
