import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import logo from "../../Football-Stadium.jpg"
import "./Home.css"

const Home = () => {

    const [ teams , setTeams] = useState([])
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className='team '>
            <div className="banner-container">
                <img className="banner-img" src={logo} alt=""/>
                <h1>Teams of EPL</h1>
            </div>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4 ">
                {
                    teams.map(team => <Teams team={team}></Teams>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;