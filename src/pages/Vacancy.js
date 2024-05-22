import { useState } from "react";
import { NavLink } from "react-router-dom";

import { jobs } from "../helpers/helpers.vac";

import Navbar from "../components/Navbar/Navbar"
import Vac from "../components/Vac/Vac";
import Search from "../components/Search/Search";

import "./../styles/vacancy.css"

function Vacancy (){

    const [searchQuery, setSearch] = useState('');
    const [selectedCity, setCity] = useState('');
    const [selectedSpecialties, setSelectedSpecialties] = useState([]);

    const applyFilters = (jobsArray) => {
        let filtersJob = [...jobsArray];

        if (searchQuery !== '') {
            filtersJob = filtersJob.filter(job =>
                job.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (selectedCity !== '') {
            filtersJob = filtersJob.filter(job => job.city === selectedCity);
        }
        if (selectedSpecialties.length > 0) {
            filtersJob = filtersJob.filter(job => selectedSpecialties.includes(job.specialty));
        }
        return filtersJob;
    };

    const filtersJob = applyFilters(jobs);

    const handleSpecialtyChange = (specialty) => {
        setSelectedSpecialties((prevSelectedSpecialties) => {
            if (prevSelectedSpecialties.includes(specialty)) {
                return prevSelectedSpecialties.filter((sp) => sp !== specialty);
            } else {
                return [...prevSelectedSpecialties, specialty];
            }
        });
    };

    return(
    <>
    <div className="back">
        <div className="vacancy-navbar">
            <Navbar/>
        </div>
        <Search setValue={setSearch} setCityFilter={setCity}/>
        <div className="content-job">
     
                <div className="boxes-job">
                <NavLink to="/vacancy/job/" className="link-vac">
                    {filtersJob.map((job)=>{
                        return(
                        <Vac 
                            key={job.id}
                            index={job.id} 
                            title={job.title} 
                            discription={job.discription} 
                            coin={job.coin}
                            city={job.city}
                            name={job.name} 
                            img={job.img}
                            tasks={job.tasks}
                            requirements={job.requirements}
                        />)
                    })}
                    </NavLink>
                </div>
    
            <div className="filters">
                <div className="name-spec">
                    <h3>Направления</h3>
                </div>
                <div className="filter-spec">
                    <div className="test-box">
                        <input
                            type="checkbox"
                            id="1"
                            class="custom-checkbox"
                            checked={selectedSpecialties.includes('frontend')}
                            onChange={() => handleSpecialtyChange('frontend')}
                            />
                        <label className="label-check" htmlFor="1"></label>
                        FrontEnd  разработчик
                    </div>
                    <div className="test-box">
                        <input
                            type="checkbox"
                            id="2"
                            class="custom-checkbox"
                            checked={selectedSpecialties.includes('backend')}
                            onChange={() => handleSpecialtyChange('backend')}
                        />
                        <label className="label-check" htmlFor="2"></label>
                        Backend разработчик
                    </div>
                    <div className="test-box">
                        <input
                            type="checkbox"
                            id="3"
                            className="custom-checkbox"
                            checked={selectedSpecialties.includes('fullstack')}
                            onChange={() => handleSpecialtyChange('fullstack')}
                        />
                        <label className="label-check" htmlFor="3"></label>
                        Fullstack разработчик
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Vacancy;