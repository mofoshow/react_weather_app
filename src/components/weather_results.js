import React from "react";
import WeatherCard from './weather_card';
import ErrorMessage from './error_message';

const APPID = 'a1c31cc58f4d966e9198256fcdf2d9e5';

class WeatherResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Stockholm',
            weatherData: [],
            error: ''
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillReceiveProps(queryString) {
        this.setState({ 'location': queryString.queryString }, function () {
            this.fetchData();
        });
    }

    fetchData() {
        fetch(this.getApiUrl(this.state.location))
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return Promise.resolve(res.json())
                } else {
                    var error = res.statusText;
                    return Promise.reject(error);
                }
            })
            .then((json) => {
                this.setState({ 'error': '' })
                this.parseResponse(json.list)
            }).catch(error => {
                this.setState({ 'error': error });

            })
    }

    getApiUrl(name) {
        name = encodeURIComponent(name);
        return `http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${this.state.location}&appid=${APPID}`;
    }

    parseResponse(json) {
        var newArray = [];
        for (var i = 0; i < json.length; i++) {
            if (json[i].dt_txt.substr(11, 2) === '12') {
                newArray.push(json[i]);
            }
        }
        this.setState({ 'weatherData': newArray });
    }

    displayWeatherCards() {
        return (this.state.weatherData.map(function (day, index) {
            return (
                <div className="col-12 col-md-5 col-lg-3 p-2" key={index}>
                    <WeatherCard weatherId={day.weather[0].id}
                        weatherDescription={day.weather[0].description}
                        temp={Math.floor(day.main.temp)}
                        time={day.dt}
                        pressure={day.main.pressure}
                        wind={day.main.wind}
                        humidity={day.main.humidity} />
                </div>
            )
        }))
    }

    render() {
        return (
            <div className="row">
                {this.state.error && <ErrorMessage errorMessage={this.state.error} />}
                {!this.state.error && this.displayWeatherCards()}
            </div>
        )
    }
}

export default WeatherResults;