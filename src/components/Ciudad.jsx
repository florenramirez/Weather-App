import React, { useState } from "react";

export default function Ciudad({city}) {
    if(!city) return <h2>City cannot be found!</h2>;
    return (
        <div className="card">
                <div className="">
                    <div className='card-header text-dark'>
                        <h4>{city.name}</h4>
                    </div>
                    <div className="card">
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Temperature: {city.temp} ºC</li>
                            <li className='list-group-item'>Weather: {city.weather}</li>
                            <li className='list-group-item'>Wind: {city.wind} km/h</li>
                            <li className='list-group-item'>Clowds: {city.clouds}</li>
                            <li className='list-group-item'>Latitude: {city.latitud}º</li>
                            <li className='list-group-item'>Longitude: {city.longitud}º</li>
                        </ul>
                    </div>
                    
            </div>
        </div>
    )
}