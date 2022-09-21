import React from 'react';
import "./Menu.css";
import { BsFillHandbagFill } from "react-icons/bs";
import {BrowserRouter as Router,
    Routes,
    Route,
    Link} from "react-router-dom";
import { IoMdHome ,IoMdPaper,IoIosCall} from "react-icons/io";
import Pocetna from "./../../Stranice/Pocetna/Pocetna";
import Kontakt from "./../../Stranice/Kontakt/Kontakt";
import Slike from "./../../Stranice/Slike/Slike";
class Menu extends React.Component{
    //koristi se ComponentDidMount() funkcija - class komponenta je (napokon)
    componentDidMount(){ 
        var list1=[];
        list1=document.querySelectorAll('.list');
        list1.forEach((item)=>item.addEventListener('click',this.activeLink));
    }
    activeLink(){
        var list1=[];
        list1=document.querySelectorAll('.list');
        list1.forEach((item)=>item.classList.remove('active'));
        this.classList.add('active');
    }
    render()
    {
        return (
            <Router>
                <nav >
                    <ul>
                        <li className="list active">
                            <Link to="/" >
                            <span className='icon'>
                                <IoMdHome/>
                            </span>
                            <span className='text'>Pocetna</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/kategorije">
                            <span className='icon'>
                                <BsFillHandbagFill/>
                            </span>
                            <span className='text'>Termini</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/kontakt">
                            <span className='icon'>
                                <IoIosCall/>
                            </span>
                            <span className='text'>Kontakt</span>
                            </Link>
                        </li>
                    </ul>
                    <section id='sekcija1'>
                        <div id='titleBox'>
                            <div id='textBox'>
                                <div className='text1'>
                                    <h2>Istrazi Island</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id='mesto'>

                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Pocetna/>}/>
                    <Route exact path="/kategorije" element={<Slike/>}/>
                    <Route exact path="/kontakt" element={<Kontakt/>}/>
                </Routes>
            </Router>
        )
    }
}

export default Menu;
