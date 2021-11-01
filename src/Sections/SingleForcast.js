import React from "react";
import "./SingleForcast.scss";

const SingleForcast = (props) => {
  console.log(props);
  let { history, match, location } = props;
  return (
    <div className="forcast">
      <h1>KIEL 8 DAYS FORCAST</h1>
      <div className="box">
        <h2 className="header">{match.params.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${location.state.weather[0].icon}@2x.png`}
          alt=""
        />
        <p>{location.state.weather[0].main}</p>
        <p>Description: {location.state.weather[0].description}</p>
        <p>Temperature: {location.state.temp.day}°C</p>
        <p>Minimum: {location.state.temp.min}°C</p>
        <p>Maximum: {location.state.temp.max}°C</p>
        <p>Morning: {location.state.temp.morn}°C</p>
        <p>Evening: {location.state.temp.eve}°C</p>
        <p>Night: {location.state.temp.night}°C</p>
        <p>Humidity: {location.state.humidity}</p>
        <p>Wind_Speed: {location.state.wind_speed} km/h</p>
        <button className="button" onClick={() => history.push("/forcast")}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SingleForcast;
