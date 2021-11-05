import { Link } from "react-router-dom";

const NotFound = () => {
  return(
    <div className="notFound">
      <h3>Sorry...</h3>
      <p>This page does not exist. You are probably here by mistake. You can visit any other page</p>
      <Link to="/" style={{textDecoration:"none"}}><span className="notFoundSpan">Click to return homepage</span></Link>
    </div>
  );
}

export default NotFound;
