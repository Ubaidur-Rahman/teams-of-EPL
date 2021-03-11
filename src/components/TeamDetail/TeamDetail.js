import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleLogo from "../../male.png"
import femaleLogo from "../../female.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "./TeamDetail.css"
import { faFlag, faFutbol,  faMars, faSearchLocation  } from '@fortawesome/free-solid-svg-icons';




const TeamDetail = () => {
    let {teamId} = useParams();

    const [team , setTeam] = useState({})
    const {strTeam, strTeamBadge, strTeamBanner,intFormedYear,strCountry,strSport, strTeamJersey, strStadiumThumb, strGender, strDescriptionEN, strStadium, strStadiumLocation, strStadiumDescription, strFacebook, strTwitter, strYoutube} = team; 
    
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {setTeam(data.teams[0])
            console.log(team)
            })
    }, [])
    
    return (
        <div className="detail-area">
            <div>
                <div className="banner-container">
                    <img className="banner-img" src={strTeamBanner} alt=""/>
                    <img className="banner-team-logo" src={strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="container ">
                <div className="row dynamic-area p-3 my-4 align-items-center">
                    <div className="col-md-6">
                        <h1 className="text-warning">{strTeam}</h1>
                        <h5><FontAwesomeIcon icon={faSearchLocation} /> Founded: {intFormedYear}</h5>
                        <h3><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h3>
                        <h3><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h3>
                        <h3><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h3>
                    </div>
                    <div className="col-md-6">
                    
                        {strGender === 'Male' &&
                            <img className="dynamic-logo" src={maleLogo} alt=""/>
                        }
                        {strGender === 'Female' &&
                            <img className="dynamic-logo" src={femaleLogo} alt=""/>
                        }
                    </div>
                </div>    
                
                <div className="my-5 text-sm-start text-light">
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <h3 className="text-primary">Stadium: {strStadium}, <span><small>{strStadiumLocation}</small></span></h3>
                    <p>{strStadiumDescription}</p>
                </div>

                <div className="row p-3 my-4 align-items-center text-center text-primary">
                    <div className="col-md-6">
                        <h1>Jersey</h1>
                        <img className="jersey-stadium-logo" src={strTeamJersey} alt=""/>
                    </div>
                    <div className="col-md-6">
                    <h2>Stadium</h2>
                        <img className="jersey-stadium-logo" src={strStadiumThumb} alt=""/>
                    </div>
                </div>



                <div className="row align-items-center social-link">
                    <div className="col-md-12 text-center p-3 bg-danger">
                        <div className="d-inline-block m-3 p-2 border border-warning bg-white rounded-circle">
                            <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
                        </div>
                        <div className="d-inline-block m-3 p-2 border border-warning bg-white rounded-circle">
                            <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </div>
                        <div className="d-inline-block m-3 p-2 border border-warning bg-white rounded-circle">
                        <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;