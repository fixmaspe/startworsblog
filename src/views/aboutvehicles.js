import React, { useEffect } from "react";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const AboutVehicles = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">

                                {
                                    !!context.store.vehicles.results &&
                                    context.store.vehicles.results.map((item, i) => {
                                        if (i === context.store.vehiclesKey) {
                                            return (
                                                <div key={i} className="card text-center text-white bg-dark m-2">
                                                    <img className="card-img-top" src="" alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Model: {item.model}</p>
                                                        <p>Manufacturer: {item.manufacturer}</p>
                                                        <p>Cost in credits: {item.cost_in_credits}</p>
                                                        <p>Length: {item.length}</p>
                                                        <p>Maximum atmosphering speed: {item.max_atmosphering_speed}</p>
                                                        <p>Crew: {item.crew}</p>
                                                        <p>Passengers: {item.passengers}</p>
                                                        <p>Cargo capacity: {item.cargo_capacity}</p>
                                                        <p>Consumables: {item.consumables}</p>
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
export default AboutVehicles;