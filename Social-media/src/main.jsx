import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from './router/App.jsx'
import './index.css'
import CreatePost, { createPostAction } from './CreatePost.jsx';
import PostList, { postLoader } from './PostList.jsx';

const router =createBrowserRouter([
  {path: "/",
   element: <App/>,
   children: [
    {path: "/", element: <PostList/>, loader: postLoader},
{path: "/create-post", element: <CreatePost/>, action: createPostAction}
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
