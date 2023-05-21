import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/About";
import Menu from "../components/Menu";
import ContactsPages from "../pages/ContactsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:
            [{ path: '/', element: <Menu /> },{path:"/catalog/:id",element:<CatalogItem/>},
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