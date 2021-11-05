import { Link } from "react-router-dom";

const Upload = () => {
  return(
    <div className="notFound">
      <p>Upload</p>
      <Link to="/" style={{textDecoration:"none"}}><span className="notFoundSpan">Click to return homepage</span></Link>
    </div>
  );
}

export default Upload;
