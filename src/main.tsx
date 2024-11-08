import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout.tsx';
import Home from './pages/Home/index.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import User from './pages/User/index.tsx';
import MyComponent from './pages/My Component/index.tsx';
import Post from './pages/Dashboard/post.tsx';
import Comments from './pages/Dashboard/comment.tsx';


// TO-DO: lazy load
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'post',
            element: <Post />
          },
          {
            path: 'comments',
            element: <Comments />
          }
        ]
      },
      {
        path: 'my-component',
        element: <MyComponent />
      },
      {
        path: 'user',
        element: <User />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
