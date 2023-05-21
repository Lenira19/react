import MenuCard from "../../components/MenuCard";
import menu from "../../fakeData";

const Menu = ({ onItemBuy }) => {
    
    return (

        <div className="mx-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container">
            {menu.map((item) => (

                <MenuCard item={item} onClickBuy={onItemBuy} />



            ))}
        </div>


    );


};

export default Menu















































