import React from 'react';
import * as Mat from '@material-ui/core';
import CountUp from 'react-countup';
import "./cards.css";


export class Cards extends React.Component {

    render(){
        let { confirmed , recovered , deaths , lastUpdate } = this.props.data ;

        if (!confirmed) {
            return (
                <Mat.Grid container justify="center">
                    <Mat.Typography color="secondary" variant="h5"> Loading....</Mat.Typography>
                </Mat.Grid>
            )
        }

        return(
            <div className="main_container">
                <Mat.Grid container spacing={3} justify="center">

                    <Mat.Grid item xs={12} md={3} component={Mat.Card} className="card infacted">
                        <Mat.CardContent>
                            <Mat.Typography color="primary" gutterBottom> Infacted</Mat.Typography>
                            <Mat.Typography variant="h5">
                                <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                            </Mat.Typography>
                            <Mat.Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Mat.Typography>
                            <Mat.Typography variant="body2" gutterBottom> Number of active case of covid 19</Mat.Typography>
                        </Mat.CardContent>
                    </Mat.Grid>

                    <Mat.Grid item xs={12} md={3} component={Mat.Card} className="card recovered">
                        <Mat.CardContent>
                            <Mat.Typography color="primary" gutterBottom> Recovered</Mat.Typography>
                            <Mat.Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                            </Mat.Typography>
                            <Mat.Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Mat.Typography>
                            <Mat.Typography variant="body2" gutterBottom> Number of Recovered case of covid 19</Mat.Typography>
                        </Mat.CardContent>
                    </Mat.Grid>

                    <Mat.Grid item xs={12} md={3} component={Mat.Card} className="card deaths">
                        <Mat.CardContent>
                            <Mat.Typography color="primary" gutterBottom> Death</Mat.Typography>
                            <Mat.Typography variant="h5">
                                <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                            </Mat.Typography>
                            <Mat.Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Mat.Typography>
                            <Mat.Typography variant="body2" gutterBottom> Number of Death of covid 19</Mat.Typography>
                        </Mat.CardContent>
                    </Mat.Grid>

                </Mat.Grid>

            </div>
        )
    }
}