import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import WindConditions from "./../components/WindConditions";
import WindCompass from './../components/WindCompass';
import ConditionsWrapper from "./../components/ConditionsWrapper";
import Opinion from "./../components/opinion";

class WeatherPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      endpointUrl: 'https://www.pooleyc.co.uk/wdlive/src/everything.php',
      interval: 120000,
      hasResponse: false
    }
  }

  componentDidMount() {
    this.getWeatherData(this.state.endpointUrl)
    setInterval(() => {
      this.getWeatherData(this.state.endpointUrl)
    }, this.state.interval)
  }

  getWeatherData(endpoint) {
    axios
      .get(endpoint)
      .then((response) => {
        this.setState({
          weatherData: response.data,
          hasResponse: true
        });
      })
      .catch(function (error) {
        this.setState({
          weatherData: {},
          hasResponse: false
        });
      }); 
  }

  render() {
    let windData, isGood, emoji;

    if (this.state.hasResponse) {
      windData = this.state.weatherData.everything.weather.wind;
      
      isGood = windData.avg_speed.kn > 16 ? `It's good` : `It isn't great`;
      emoji = windData.avg_speed.kn > 16 ? '😃' : '😞';
    }
    

    return (
      <div className="app">
        {windData &&
          <div>
            <Helmet
            title={`${emoji} ${windData.avg_speed.kn} knots ${windData.avg_direction.cardinal}`}
            />
            <ConditionsWrapper>
              <Opinion
              content={`${isGood} ${emoji}`}
              />
              <WindConditions 
                cardinal={windData.avg_direction.cardinal}
                maxSpeed={windData.avg_speed.kn}
                avgSpeed={windData.gust_speed.kn}
              />
            </ConditionsWrapper>
            <WindCompass
              bearing={windData.avg_direction.degrees}
              googleMapURL="http://maps.google.com/maps/api/js?key=AIzaSyDOxa8-lFMbda75ruLL45CqSLIqevsxDiU"
              containerElement={<div className='compass-container'/>}
              loadingElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        }
      </div>
    );
  }
}

export default WeatherPage;

