import { useParams } from "react-router-dom";
import menu from "../../fakeData";

useParams
const MenuItemPages =() =>{
    
    const { id } = useParams();
    let item = menu.find((item)=>item.id==id);

return(
    <>
    <h1>Страница товар</h1>
    </>

     
);

};

export default MenuItemPages
