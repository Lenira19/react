import { useOutletContext } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import menu from "../../fakeData";

const Menu = () => {
    const [cart,addToCart] = useOutletContext();
    
    return (

        <div className="mx-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container">
            {menu.map((item) => (

                <MenuCard item={item} onClickBuy={addToCart} />



            ))};
        </div>


    );


};

export default Menu















































