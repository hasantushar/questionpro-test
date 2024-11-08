import { useEffect, useState } from "react";
import Post from "../../component/Post";

export default function Posts() {
  const [allPost, setAllPost] = useState([]);
  const [users, setUser] = useState([{name: 'All', id: 0}]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setAllPost(json));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(users.concat(json)));
  }, []);

  let listItems = allPost?.map((post) => <Post key={post.title} post={post} />);
  const userItem = users?.map(user => <option key={user.name} value={user.id}>{user.name}</option>);

  const filterPosts = (value) => {
    if(value == 0) {
        listItems = allPost?.map((post) => <Post key={post.title} post={post} />)
    }
    else {
        listItems = allPost?.filter(post => post.userId == value)?.map((post) => <Post key={post.title} post={post} />)
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <div>Post</div>
        <div>
          <select onChange={e => filterPosts(e.target.value)}>
            {userItem}
          </select>
        </div>
      </div>
      <ul className="">{listItems}</ul>
    </>
  );
}
