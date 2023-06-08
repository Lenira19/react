import { useOutletContext } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMenu } from "../../srore/slices/menuSlice";


const Menu = () => {

    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch();
    dispatch(loadMenu());

   // useEffect(()=>{

    //},

   // [])

    return (

        <div className="mx-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container">
            {menu.items.map((item) => (

                <MenuCard item={item} />



            ))};
        </div>


    );


};

export default Menu;















































