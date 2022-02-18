import React, { useEffect } from "react";
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

const About = () => {
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
                                        if (i === context.store.peopleKey) {
                                            return (
                                                <div key={i} className="card text-center text-white bg-dark m-2">
                                                    <img className="card-img-top" src="starwars\starwars1.jpg" alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Height: {item.height}</p>
                                                        <p>Mass: {item.mass}</p>
                                                        <p>Heir color: {item.heir_color}</p>
                                                        <p>Skin color: {item.skin_color}</p>
                                                        <p>Eye color: {item.eye_color}</p>
                                                        <p>Birth year {item.birth_year}</p>
                                                        <p>Gender: {item.male}</p>
                                                        <p>Home world: {item.homeworld}</p>
                                                        <p>Films: {item.films}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }

                                {/*  <div className="row">
                                    <div className="col-md-12">
                                        <h1>Home</h1>
                                        <ul>
                                            {
                                                context.store.todos.map((item, i) => {
                                                    return <li key={i}>{item}</li>
                                                })
                                            }
                                        </ul>
                                        <p>{context.store.name}</p>
                                        <input onChange={(e) => context.actions.setName(e)} placeholder="setName" />
                                        <button onClick={() => context.actions.addTask("I am the task " + parseInt(context.store.todos.length + 1))}>+ add</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}
export default About;