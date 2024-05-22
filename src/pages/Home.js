import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar"
import low from "./../img/low2.png"
import mid from "./../img/mid.png"
import hight from "./../img/hight.png"
import i from "./../img/logo.png"
import tsu from "./../img/tsu.png"
import sb from "./../img/sb.png"

import "./../styles/main.css"

function Home (){

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
    <>
        <body>
        <Navbar/>
        <section id="front">
          <img src={hight} id="hight" style={{ top: `${scrollPosition * 0.6}px`}}/>
          <h2 id="text" style={{ top: `${20 + scrollPosition * 0.1}%` }}><span>IT-рекрутёр</span><br/>Найди работу</h2>
          <img src={mid} id="mid" style={{ top: `${270+ scrollPosition * 0.2}px` }}/>
          <img src={low} id="low" style={{ top: `${375+ scrollPosition * -0.45}px` }}/>
        </section>
  
        <section id="content">
            <div className="sec">
                <h1>Поможем найти вакансию по твоим навыкам</h1>
                </div>
                <div className="wrapper">
                    <div className="container">
                        <input type="radio" name="slide" id="c1" checked/>
                        <label for="c1" className="card">
                            <div className="row">
                                <div className="icon"></div>
                                <div className="description">
                                    <h4>HTML</h4>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c2" checked/>
                        <label for="c2" className="card">
                            <div className="row">
                                <div className="icon"></div>
                                <div className="description">
                                    <h4>CSS</h4>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c3" checked/>
                        <label for="c3" className="card">
                            <div className="row">
                                <div className="icon"></div>
                                <div className="description">
                                    <h4>PHP</h4>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c4" checked/>
                        <label for="c4" className="card">
                            <div className="row">
                                <div className="icon"></div>
                                <div className="description">
                                    <h4>SQL</h4>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c5" checked/>
                        <label for="c5" className="card">
                            <div className="row">
                                <div className="icon"></div>
                                <div className="description">
                                    <h4>JavaScript</h4>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
        </section>

        <section id="skills">
            <div className="sec2">
                <h1>Не хватает навыков?</h1>
                <p>Вот несколько источников, которые помогут тебе</p>
            </div>
            <div className="cont">
                <a href="https://webref.ru">
                <div className="box1">
                    <div className="info">
                        <h4>HTML / CSS</h4>
                        <p>WebRederence: на сайте находятся справочники и учебные курсы по различным веб-технологиям, а также руководства по вёрстке веб-страниц.</p>
                    </div>
                </div>
                </a>
                <a href="https://www.php.net/manual/ru/langref.php">
                <div className="box2">
                    <div className="info">
                        <h4>PHP</h4>
                        <p>Php.net: на сайте находится полное руководство по скриптовосу языу общего назначения PHP, который особенно подходит для веб-разработки.</p>
                    </div>
                </div>
                </a>
            </div>
        </section>

        <section id="we">
            <div className="sec1">
                <h1>О нас</h1>
            </div>
            <div>
                <img src={i} id="im"/>
            </div>
            <div className="i">    
                <div className='name-comp-home'><h1>CatWORK</h1></div>
                <div className='disc-comp-home'>
                    <ul>
                        <li><p>10+ вакансий</p></li>
                        <li><p>2 года на рынке</p></li>
                        <li><p>Более 5 закрытых вакансий</p></li>
                        <li><p>Целых 2 партнера</p></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="parthners">
            <div className="sec1">
                <h1>Наши партнёры</h1>
            </div>
            <div className="cont1">
                <div className="box">
                    <h4 id="s"><span>Совком</span>Банк</h4>
                    <img src={sb} id="sb"/>
                </div>
                <div className="box">
                    <h4 id="t">Томский Государственный Университет</h4>
                    <img src={tsu} id="tsu"/>
                </div>
            </div>
        </section>

        <section className="search">
            <div className="sec3">
                <h1>А теперь пора искать вакансии</h1>
            </div>
            <NavLink to="/vacancy">
                <button class="button">Вперёд</button>
            </NavLink>
        </section>
      </body>
    </>
    );
    
}


export default Home;

