export default function Post({ comment }) {
  return (
    <>
      <div className="m-4 border-2 border-gray-600">
        <div className="text-bold text-blue-400 p-2">{comment.name}</div>
        <div className="p-2">{comment.body}</div>
      </div>
    </>
  );
}
