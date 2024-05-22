import { NavLink } from "react-router-dom";

import "./footer.css";

import logo from "../../img/logo.png";
import phone from "../../img/phone.png";
import git from "../../img/git.png";
import tel from "../../img/tel.png";
import mail from "../../img/mail.png";



function Footer (){
    return(
        <div className="footer" id="fot">
            <div className="footer-name">
                <p>Контактная информация</p>
            </div>
            <div className="footer-block">
                <div className="footer-logo">
                    <img src={logo} className="logo-fot"/>
                </div>
                <div className="footer-header">
                    <NavLink to="/" className="link-footer"><p>Главная</p></NavLink>
                    <NavLink to="/vacancy" className="link-footer"><p>Вакансии</p></NavLink>
                    <NavLink to="/vacancy" className="link-footer"><p>Поиск</p></NavLink>
                </div>
                <div className="footer-contacts">
                    <div className="row-text">
                        <div className="icon-foter">
                            <img src={mail} className="icon-fot"/>
                        </div>
                        <div className="text-foter">
                            <p>web-proger1322@mail.ru</p>
                        </div>
                    </div>
                    <div className="row-text">
                        <div className="icon-foter">
                            <img src={git} className="icon-fot"/>
                        </div>
                        <div className="text-fot">
                            <p>https://github.com</p>
                        </div>
                        </div>
                    <div className="row-text">
                        <div className="icon-foter">
                            <img src={phone} className="icon-fot"/>
                        </div>
                        <div className="text-fot">
                            <p>+7(999)-543-12-12</p>
                        </div>
                    </div>
                    <div className="row-text">
                        <div className="icon-foter">
                            <img src={tel} className="icon-fot"/>
                        </div>
                        <div className="text-fot">
                            <p>https://vk.com/feed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-footnote">
                <p>&copy; 2024 <span>IT</span>-рекрутёр</p>
            </div>
        </div>
    );
}

export default Footer;