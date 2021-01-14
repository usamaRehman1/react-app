import React from 'react'
import * as Mat from '@material-ui/core';
import { fetchCountries } from '../../apis/apis';
import "./countryPicker.css"


export class CountryPicker extends React.Component {
    constructor(){
        super()
        this.state = {
            contriesArr : [],
        }
    }

    async componentDidMount() {
        let contriesObj = await fetchCountries();
        this.setState({ contriesArr : contriesObj.countries })
    }

    render(){
        // console.log("country Length=>", this.state.contries.length)
        return(
            <div className="country_container">
               {
                    this.state.contriesArr.length ? (
                        <Mat.FormControl>
                            <Mat.NativeSelect onChange={(ev) => this.props.handelCountryChange(ev.target.value)}>
                                <option value="global">global</option>
                                {
                                    this.state.contriesArr.map((country, ind) => (
                                        <option key={ind} value={country.name}>{country.name}</option>
                                    ))
                                }
                            </Mat.NativeSelect>
                        </Mat.FormControl>
                    ) : (
                        ""
                    )
                }
            </div>
        )
    }
}