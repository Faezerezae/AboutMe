import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import WorkSamples from "../components/WorkSamples";
import PastAndSkill from "../components/comp-PastAndSkill/PastAndSkill";
import About from "../components/About";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/PastAndSkill",
        element: <PastAndSkill />
      },
      {
        path: "/WorkSample",
        element: <WorkSamples />
      }
    ],
    errorElement: (
      <NotFound/>
    )
  }
])

export const AppRoute = () => {
  return <RouterProvider router={routes} />
}