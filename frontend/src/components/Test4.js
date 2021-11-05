import {useEffect, useState} from "react";

const Test4 = () => {
  useEffect (() => {
    fetchData();
  },  []);/*dependency array is empty. It means useEffect function will run only once when page renders.*/
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    const data = await fetch("/test4");
    const data2 = await data.json();
    setItems(data2);
  };
  return(
    <div>
      {
      items.map(result => (
        <div key={result.id}>
          <p>{result.name}</p>
          <p>{result.city}</p>
          <p>{result.age}</p>
        </div>
      ))
      }
    </div>
  );
}

export default Test4;
