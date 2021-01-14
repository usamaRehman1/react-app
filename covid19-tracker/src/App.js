import React from 'react';
import { Cards , Chart , CountryPicker } from './component/index';
import LOGO from './images/corona.png';
import { fetchData } from './apis/apis';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data : {},
      country : "",
    }
  }

  async componentDidMount(){
    const fetchDataHere = await fetchData();
    this.setState({data : fetchDataHere })
  }

  handelCountryChange = async (country) => {
    const fetchDataHere = await fetchData(country);
    this.setState({country : country , data : fetchDataHere})
  } 

  render(){
    let { data , country } = this.state ;
    return (
      <div>
        <img src={LOGO} className="coronaLogo" alt="corona logo"/>
        <Cards data={data}/>
        <CountryPicker handelCountryChange={this.handelCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
