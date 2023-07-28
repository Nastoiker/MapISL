import {RouterProvider} from "react-router-dom";
import {route} from "./config/route.tsx";
export const Router = () => {
    return  <RouterProvider router={route} />
}