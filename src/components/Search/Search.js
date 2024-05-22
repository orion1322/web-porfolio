import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loop from "../../img/loop.png"

import "./search.css"

function Search({setValue, setCityFilter}) {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue(searchQuery);
        setCityFilter(selectedCity);
        history('/vacancy')
    };

    const history = useNavigate();
    
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="back-search">
                    <input type="text" 
                    className="search-box" 
                    name="query" 
                    placeholder="Введите запрос..."
                    onChange={handleSearchQueryChange}
                    />
                    <select name="city" className="city-search" value={selectedCity} onChange={handleCityChange}>
                        <option className='select-city'>Москва</option>
                        <option className='select-city'>Новосибирск</option>
                        <option className='select-city'>Томск</option>
		            </select>
                    <button type="submit" className="search-button"><img src={loop} className='loop-search'/></button>
                </div>
            </form>
        </div>
    );
}

export default Search;