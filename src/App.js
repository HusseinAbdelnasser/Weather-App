import React, {Component} from 'react';
import './App.css';
import Form from './Components/Form';
import Weather from './Components/Weather';


const API_KEY = "a76ab423c01ef9303cbff207bb7b8023";
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

    state ={
        temperature:'',
        city:'',
        countrey:'',
        humidity:'',
        description:'',
        error: ''
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api.json();
        console.log(data)
        if(city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                timezone: data.timezone,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                error: ''
            })
        } else {
            this.setState({
                temperature:'',
                city:'',
                timezone:'',
                pressure:'',
                description:'',
                error: 'Please Enter Data'
            })
        }
    }
    render() {
        return (
            <div className="wrapper">
               <div className="form-container">
               <Form getWeather= {this.getWeather} />
               <Weather 
                  temperature= {this.state.temperature}
                  city= {this.state.city}
                  timezone= {this.state.timezone}
                  pressure={this.state.pressure}
                  description= {this.state.description}
                  error= {this.state.error}
               />
               </div>
            </div>
        );
    }
}

export default App;
