import { NavLink } from "react-router-dom";

import log from "../../img/logo.png";

import "../Navbar/navbar.css"

function Navbar (){
    return(
    <nav>
        <header>
            <NavLink to="/" className="logo"><img src={log} className="logo-head"/></NavLink>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/vacancy">Вакансии</NavLink></li>                   
                <li><a href="#fot">Контакты</a></li>
            </ul>
        </header>
    </nav>
    );
}

export default Navbar;
