import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/About";

import ContactsPages from "../pages/ContactsPage";
import MenuItemPages from "../pages/MenuItemPages";
import Menu from "../pages/MenuPages";






const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:
            [{ path: '/', element: <Menu /> },{path:"/catalog/:id",element:<MenuItemPages/>},
            {
                path: 'about',
                element: <Outlet />, children: [{path:'',element:<AboutPage/>},{
                    path: 'contacts', element: <ContactsPages />
                }]

            }

            ]

    },


]);

export default router; 