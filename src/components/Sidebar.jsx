import logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
import {
    DASHBOARD,
    PRODUCTS,
    HELP,
    ORDERS
} from "../utils/consts";

function Sidebar() {
    return(
        <div class="sidebar">
            <div class="logo">
                <img src={logo} alt="Logo" />
                <Link to={DASHBOARD} class="logo-text">KFC</Link>
            </div>
            <nav class="sidebar-nav">
                <Link to={DASHBOARD} class="sidebar-nav__link">
                    Главная
                </Link>
                <Link to={PRODUCTS} class="sidebar-nav__link">
                    Товары
                </Link>
                <Link to={ORDERS} class="sidebar-nav__link">
                    Заказы
                </Link>
                <Link to={HELP} class="sidebar-nav__link">
                    Помощь
                </Link>
            </nav>
            <p class="sm-text">&copy;2025, Pullip archive. Все права защищены</p>
        </div>
    );
}

export default Sidebar