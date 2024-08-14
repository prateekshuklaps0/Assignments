import "./index.css";
import App from "./App.tsx";
import Home from "./Pages/Home/Home.tsx";
import Login from "./Pages/Auth/Login.tsx";
import Register from "./Pages/Auth/Register.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import { store } from "./Redux/Store.ts";
import { GetLsData } from "./Redux/Action.ts";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

const isAuth = async () => {
  const token = GetLsData()?.token;
  if (!token) {
    return redirect("/register");
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", loader: isAuth, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ToastContainer
      position="top-center"
      theme="colored"
      pauseOnHover={false}
      closeOnClick={false}
      pauseOnFocusLoss={false}
    />
    <RouterProvider router={router} />
  </Provider>
);
