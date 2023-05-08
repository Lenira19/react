const MenuCard = ({ item, onClickBuy=()=>{}  }) => {

    const ing = (
        <div className='text-xm'>
            {item.parameters.join(" , ")}

        </div>

    );

    return (< div class="rounded overflow-hidden shadow-lg md:bg-slate-300" >
        <img src={item.picture} className="w-full object-contain h-48 w-96 " />
        <div className="p-2">
            <div className='text-2xl font-bold py-2'>
                {item.name}
            </div>
            <div className='p-2'>{ing}</div>
            <button onClick={()=> onClickBuy(item)} class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Закать
            </button>

        </div>


    </div >

    );

};

export default MenuCard;