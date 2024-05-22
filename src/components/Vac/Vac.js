import { NavLink } from "react-router-dom";

import Form from "../Form/Form"

import "./Vac.css"

function Vac({title, phone, coin, city, discription, name, img, index, tasks, requirements}) {

    return (
        <NavLink to={`/vacancy/job/${index}`} className="link-vac">
            <div className="container-job">
                <div className="job-box">
                    <div className="text-box">
                        <div className="job-title">
                            <div className="title"><h4>{title}</h4></div>
                            <div className="p"><p>{coin} руб</p> </div>
                            <div className="job-discription"><p>{discription}</p></div>
                        </div>
                        <div className="right-col">
                            <div><h4>{name}</h4></div>
                            <div className="corp"> <img src={img} id="img-job"/></div>
                        </div>
                    </div>
                    <a href="#open-form">
                        <button className="but-job">Посмотреть</button>
                    </a>
                    <Form/>
                </div>
            </div>
        </NavLink>
    );
}

export default Vac;