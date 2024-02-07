import { useEffect, useState } from "react";

const Posts = () => {
    const [items, setItems] = useState([]);

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then((res) => res.json())
   .then((posts) => setItems(posts));
  }, []);

  return (
    <>  
      <h1>게시글 목록</h1>
      <ul>
        {items && items.map(({title}) => (
             <li>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;