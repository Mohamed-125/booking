import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import {
//   createBroweserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
import {
  Outlet,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router";

import { createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  <div>
    <Outlet />
  </div>;
};

export default App;
