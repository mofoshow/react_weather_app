import React from 'react';
import Timestamp from 'react-timestamp';

class WeatherCard extends React.Component{

    bgColorClass(){
        if(this.props.weatherId === 904 || this.props.weatherId === 802 || this.props.weatherId === 800){
            return 'hot'
          }else{
              return 'rain'
          }
    }

    

    render(){
        return(
            <div className={this.bgColorClass() + ' card pt-3'} >
            <div className="row align-items-center pb-3">
              <div className="col-6 text-center">
              <i className={"icons wi wi-owm-" + this.props.weatherId + " mb-4"}></i>
              </div>
              <div className="col-6">
                <p>{this.props.description}</p>
                
                <h1 >{Math.floor(this.props.temp)} &#8451;</h1>
                <p className=""><Timestamp time={this.props.time} format='date' /></p>
              </div>
            </div>
            <div className="card-body">
            <p>Pressure: {this.props.pressure}</p>
              <p>Wind: {this.props.speed}</p>
              <p>Humidity: {this.props.humidity}</p>
            </div>
        </div>
        )
    }
}

export default WeatherCard;