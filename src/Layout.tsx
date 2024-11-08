import { Outlet, NavLink, Link } from "react-router-dom";
import userStore from "./state/user";

export default function Layout() {
    const user = userStore(state => state.user)

  return (
    <>
      <div className="grid grid-cols-10 border-2 border-red-500 ">
        <div className="flex p-4 m-4 col-span-8">
          <NavLink className="bg-blue-700 m-2 p-2 text-white" to='/'>Home</NavLink>
          <NavLink className="bg-blue-700 m-2 p-2 text-white" to='/dashboard'>Dashboard</NavLink>
          <NavLink className="bg-blue-700 m-2 p-2 text-white" to='/my-component'>My Component</NavLink>
        </div>
        <Link to='/user' className="col-span-2">
            <div className="m-4 p-4">
                <div>{user.name}</div>
                <div>{user.email}</div>
            </div>
        </Link>
      </div>
      <div className="m-1 p-1">
      <Outlet />
      </div>
    </>
  );
}
