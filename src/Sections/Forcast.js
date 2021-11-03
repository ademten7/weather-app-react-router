import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Forcast.scss";
// let url =
// `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`

export default class Forcast extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((success) => {
      // console.log(success);==>we got the object
      const { latitude, longitude } = success.coords; //==>latitude, longitude these are inside the coords obj
      // console.log(latitude, longitude);
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=73e2064f98023d1456001375d4615ea5&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({ data: data.daily });
        });
    });
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="days">
        <ul className="forcast">
          {this.state.data.map((data, index) => {
            console.log("rendered");
            return (
              <li key={index}>
                <NavLink
                  className="day-list"
                  activeClassName="myActiveClass"
                  to={{ pathname: `/forcast/Day ${index + 1}`, state: data }}
                >{`${index + 1}.DAY`}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
