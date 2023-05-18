import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/About";
import Menu from "../components/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, 
        children: 
        [{path: 'about',
            element: <AboutPage />, children: [{
                path: 'contacts', element: "<div><a href='tel:+7900000000'>7900000000'<a /><div />"}] 
                
                }

                    ]

    },


                    ]);

                    export default router; 