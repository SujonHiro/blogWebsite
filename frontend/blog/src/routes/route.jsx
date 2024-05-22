import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import Home from "../page/Home";
import BlogPage from "../page/BlogPage";
import AuthorPage from "../page/AuthorPage";
import SignUpPage from "../page/SignUpPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    /* loader: rootLoader, */
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: "/blogs",
        element: <BlogPage />
      },
      {
        path: "/author",
        element: <AuthorPage />
      },
      {
        path: "/register",
        element: <SignUpPage />
      },{
        path: "/details/:id",
        element: <BlogPage />
      }
    ],
  },
]);

export default router