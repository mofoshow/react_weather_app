
import React from "react";
import ReactDOM from "react-dom";
import '../sass/main.scss';
import SearchBar from './components/search_bar';
import WeatherResults from './components/weather_results';


class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'Stockholm'
    }
  }

  handleQuery(query) {
    this.setState({ 'location': query });
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  render() {
    return (
      <div>
        <SearchBar onQuery={this.handleQuery.bind(this)} />
        <h2 className="mt-3">{this.Capitalize(this.state.location)}</h2>
        <WeatherResults queryString={this.state.location} />
      </div>
    )
  }
}

ReactDOM.render(<DayCard />, document.getElementById("index"));