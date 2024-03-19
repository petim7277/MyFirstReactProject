import Layout from "../Component/Layout/Layout";
import Home from "../Features/Home";

export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element:<Home/>
            }

        ]
    },

]

