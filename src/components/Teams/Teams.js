import React from 'react';
import { Link } from 'react-router-dom';
import "./Teams.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Teams = (props) => {
    console.log(props.team);
    const {strTeam, strTeamBadge, strSport, idTeam } = props.team;


    return (
        <div className="col text-center">
            <div className="card  single-team">
                <div className="text-center">
                    <img className="team-logo card-img-top" src={strTeamBadge} alt={strTeam} />
                </div>
                <div className="card-body">
                    <h1>{strTeam}</h1>
                    <h6 className="text-secondary">Sports Type: {strSport}</h6>
                    <Link to={`team/${idTeam}`}><button className="btn btn-primary p2 w-50">Explore  <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </div>
    )
};

export default Teams;