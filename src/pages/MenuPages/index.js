import MenuCard from "../../components/MenuCard";

const Menu = ({onItemBuy}) => {
    let list = [
        { name: 'iPhone 8', price: 20000, parameters: ["color:white","capacity:128 Gb","display:1334×750 px"],picture:"/picture/8.jpg" },
        { name: 'iPhone 10', price: 25000, parameters: ["color:black","capacity:256 Gb","display:12436×1125 px"],picture:"/picture/10.jpg" },
        { name: 'iPhone 11', price: 40000,parameters: ["color:yellow","capacity:128 Gb","display:1792×828 px"],picture:"/picture/11.jpg" },
        { name: 'iPhone 12', price: 60000,parameters: ["color:green","capacity:256 Gb","display:1170 x 2532 px"],picture:"/picture/12.jpg" },
        { name: 'iPhone 13', price: 80000,parameters: ["color:orange","capacity:256 Gb","display:1170 x 2532 px"],picture:"/picture/13.jpg" },
        { name: 'iPhone 14', price: 95000,parameters: ["color:white","capacity:512 Gb","display:1170 x 2532 px"],picture:"/picture/14.jpg" },
        { name: 'iPhone 14 pro', price: 150000,parameters: ["color:grey","capacity:1 T","display:1179 x 2556 px"],picture:"/picture/14pro.jpg" },
        { name: 'iPhone 13 pro', price: 120000,parameters: ["color:blue","capacity:1 T","display:1170 x 2532 px"],picture:"/picture/13pro.jpg" }
    ];
    return (

        <div className="mx-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container">
            {list.map((item) => (

                <MenuCard item={item} onClickBuy={onItemBuy}/>



            ))}
        </div>


    );


};

export default Menu















































