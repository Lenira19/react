import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
    return (
        <div>

            <h1>Интернет магазин</h1>
            <p>О нашем агазине</p>

            <div class="flex">
                <Link to='contacts'>
                    <p>Контакт</p></Link>
            </div>



        </div>

    );

};

export default AboutPage;


