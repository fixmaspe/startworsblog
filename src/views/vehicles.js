import React, { useEffect } from "react";
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';


const Vehicles = (props) => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">

                                {!!context.store.vehicles.results &&
                                    context.store.vehicles.results.map((item, i) => {
                                        return (
                                            <div key={i} className="col-md-4">
                                                <div className="card text-center text-white bg-dark m-2">
                                                <img src={`https://starwars-visualguide.com/assets/img/planets/${i+10}.jpg`}
											className="card-img-top img-fluid"
											alt="..."/>
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Model:  {item.model}</p>
                                                        <Link onClick={() => context.actions.getKeyVehicles(i)} to="/aboutvehicles" className="btn btn-dark">Learn more</Link>                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="col-md-12 d-flex justify-content-between">
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getVehicles(context.store.vehicles.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getVehicles(context.store.vehicles.next)}
                                    >
                                        Next
                                    </button>

                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    );
}
export default Vehicles;