export default function Post({ post }) {
  return (
    <>
      <div className="m-4 border-2 border-gray-600">
        <div className="text-bold text-blue-400 p-2">{post.title}</div>
        <div className="p-2">{post.body}</div>
      </div>
    </>
  );
}
