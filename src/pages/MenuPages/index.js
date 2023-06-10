
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "../../components/MenuCard";
import { fetchCatalog } from "../../store/slices/catalogSlice";
import { useEffect } from "react";
import LoadingError from "../../components/loadingError";
import Loading from "../../components/loading";

const Menu = () => {
    const menu = useSelector(state => state.catalog)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalog())
    }, [])


    return (<>

        <div className="mx-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container">
            {menu.items.map((item) => (

                <MenuCard item={item} />
            ))}</div>
        <div>
            {menu.loading == "pending" && <Loading image = "public\picture\loading.gif" text="загрузка"/>}
            {menu.loading == "rejected" && <LoadingError message = "ошибка загрузки данных"/>}
        </div>
    </>

    )


};

export default Menu;















































