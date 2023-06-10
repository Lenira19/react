import { useParams } from "react-router-dom";
import menu from "../../fakeData";

const MenuItemPages = () => {
   // const menu = useSelector(state => state.menu)
   // const dispatch = useDispatch();
    

   //useEffect(()=>{
    //dispatch(loadMenu());

   // },[])

    const { id } = useParams();

    let menuItem = menu.find((item) => item.id == id);
    console.log(menuItem)

    return (
        <>
            <h1>{menuItem.name}</h1>
            <img src={menuItem.picture}></img>
            <p>{menuItem.parameters.join(",")}</p>

        </>


    )

};

export default MenuItemPages;
