
import React from "react";
import ReactDOM from "react-dom";
import '../sass/main.scss';
import SearchBar from './components/search_bar';
import WeatherResults from './components/weather_results';


class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: ''
    }
  }

  handleQuery(query) {
    this.setState({ 'location': query });
  }

  render() {
    return (
      <div>
        <SearchBar onQuery={this.handleQuery.bind(this)} />
        <WeatherResults queryString={this.state.location} />
      </div>
    )
  }
}

ReactDOM.render(<DayCard />, document.getElementById("index"));