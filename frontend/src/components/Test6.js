import {useParams} from "react-router-dom";
/*import useFetch from "./useFetch";*/

const Test6 = () => {
  const {id} = useParams();
  /*const {dataArticle3, isLoading, errMes} = useFetch("/articlesx/" + id);*/

  return(
    <div className="article-details">
      <div>Data {id}</div>
    </div>
  );
}

export default Test6;
