import Layout from "../Component/Layout/Layout";
import Home from "../Features/Home";
import Authentication from "../Features/Authentication";

export const Routes = [
    {
        path: "/",
        // element: <Layout/>,
        children: [
            {
                path: "",
                element:<Home/>
            },

            {
                path: "",
                element:<Authentication/>
            }

        ]
    },

]

