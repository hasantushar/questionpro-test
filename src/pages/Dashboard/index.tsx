import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Dashboard () {
    return <>
    <div className="flex p-4 m-4">
          <Link className="bg-blue-700 m-2 p-2 text-white" to='/dashboard/post'>Post</Link>
          <Link className="bg-blue-700 m-2 p-2 text-white" to='/dashboard/comments'>Comment</Link>
    </div>
    <Outlet />
    </>
}