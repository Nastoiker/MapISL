import {createBrowserRouter} from "react-router-dom";
import App from "../../../App.tsx";
import LayoutMain from "../../../layout/Layout.tsx";

export const route = createBrowserRouter([{
    path: '/',
    element:
        <>
        <LayoutMain />

    </>,
    children: [{
      path: '*' ,
      element:   <App />,
    }
    ]
}])