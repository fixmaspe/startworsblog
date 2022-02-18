import React, { useEffect } from "react";
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

const People = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">

                                {
                                    !!context.store.people.results &&
                                    context.store.people.results.map((item, i) => {
                                        return (
                                            <div key={i} className="col-md-4">
                                                <div className="card text-center text-white bg-dark m-2">
                                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${i+5}.jpg`}
											className="card-img-top img-fluid"
											alt="..."/>
                                            
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Birth year {item.birth_year}</p>
                                                        <Link onClick={() => context.actions.getKeyPeople(i)} to="/about" className="btn btn-dark">Learn more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="col-md-12 d-flex justify-content-between">
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getPeople(context.store.people.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getPeople(context.store.people.next)}
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
    )
}
export default People;