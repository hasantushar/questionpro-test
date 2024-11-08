import { useEffect, useState } from "react";
import Comment from "../../component/Comment";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  const listItems = comments?.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    <>
      <ul className="">{listItems}</ul>
    </>
  );
}
