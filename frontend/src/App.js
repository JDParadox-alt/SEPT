import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import axios from 'axios';
import logo from './logo.svg';
import './assets/img/bg-masthead.jpg';
import './App.css';
import "./css/styles.css";
import Home from "./Home.js";

const url = 'http://localhost:8080/serviceItems'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      import: [],
      sample_data: {}
    };
    this.getData = this.getData.bind(this);
  }
  useScript = (url, script) => {
    // const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
  };

  getData(ev){
    axios.get(url)
      .then(function(response) {
        console.log(response.data)
        ev.setState({ import: response.data }, ()=>{console.log(ev.state.import[0]) })
        ev.setState({ sample_data: response.data[0] }, ()=>{console.log(ev.state.sample_data) })
      });
  }

  componentDidMount() {
    const script = document.createElement("script");
    this.useScript("./js/scripts.js", script);
    this.getData(this);
  }

  render() {
    return (
      <div className="App">
        <Home serviceName={typeof this.state.sample_data !== undefined ? this.state.sample_data.service_name : null}/>
      </div>
    );
  }
}

export default App;
