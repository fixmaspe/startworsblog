import React, { useEffect } from "react";
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

const AboutPlanets = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">

                                {
                                    !!context.store.planets.results &&
                                    context.store.planets.results.map((item, i) => {
                                        if (i === context.store.planetsKey) {
                                            return (
                                                <div key={i} className="card text-center text-white bg-dark m-2">
                                                    <img className="card-img-top" src="./../img/starwars1.jpg" alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Rotation period: {item.rotation_period}</p>
                                                        <p>Orbital perion: {item.orbital_period}</p>
                                                        <p>Diameter: {item.diameter}</p>
                                                        <p>Climate: {item.climate}</p>
                                                        <p>Gravity: {item.gravity}</p>
                                                        <p>Terrain: {item.terrain}</p>
                                                        <p>Surface wather: {item.surface_water}</p>
                                                        <p>Population: {item.population}</p>
                                                        <p>Residents: {item.residents}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}
export default AboutPlanets;