import "./index.css";
import React, { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { authCheckAsync } from "./redux/async/authAsync";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const checkingAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      await dispatch(authCheckAsync(token));
    }
  };

  useEffect(() => {
    checkingAuth();
  }, [dispatch]);

  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default App;
