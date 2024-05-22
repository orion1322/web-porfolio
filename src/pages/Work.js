import { useParams } from "react-router-dom";
import { jobs } from "../helpers/helpers.vac";
import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Form from "../components/Form/Form";

import "./../styles/work.css"

function Work (){

    const {id} = useParams();
    const job = jobs[id];

    const [setValue, search] = useState('');
    const [selectedCity, city] = useState('');
    
    return(
<>
    <div className="vacancy-navbar">
        <Navbar/>        
    </div> 
    <div className="container-work">
        <Search setValue={search} setCityFilter={city}/>
        <div className="content-work">
            <div className="left-col-work">
                <div className="name-job-work">
                    <h1>{job.title}</h1>
                </div>
                <div className="coin-job-work">
                    <h2>{job.coin}руб</h2>
                </div>
                <div className="tasks-work">
                    <div className="description-work">
                        <p>{job.discription}</p>
                    </div>
                    <h3>Обязанности</h3>
                    <div className="description-work">
                        <p>{job.tasks}</p>
                    </div>
                    <h3>Требования</h3>
                    <div className="description-work">
                        <p>{job.requirements}</p>
                    </div>
                </div>
                <a href="#open-form">
                    <button className="but-job" href="#open-form">Откликнуться</button>
                </a>
                <Form/>
            </div>
            <div className="right-col-work">
                <div className="img-work">
                    <img src={job.img} className="img-com"/>
                </div>
                <div className="work-box-info">
                    <div className="name-work">
                        <h2>{job.name}</h2>
                    </div>
                    <div className="name-work">
                        <p>г. {job.city} &nbsp; тел. {job.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default Work;