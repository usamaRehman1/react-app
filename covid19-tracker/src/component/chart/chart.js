import React from 'react'
import { Line , Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../apis/apis';
import "./chart.css"


export class Chart extends React.Component {
    constructor(){
        super()
        this.state = {
            dailyData : [],
        }
    }

    async componentDidMount() {
        let dailyData = await fetchDailyData()
        this.setState({ dailyData : dailyData})
    }

    render(){
        let { dailyData } = this.state;
        let { data , country } = this.props ;
        let { confirmed, recovered, deaths } = data;

        return(
            <div>
                {
                    country ? (
                        confirmed ? (
                            <Bar
                                data={{
                                    labels: ["infacted", "Recovered", "Deaths"],
                                    datasets: [{
                                        label: "people",
                                        backgroundColor: ["rgba(0,0,255,0.5)", "rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
                                        data: [confirmed.value, recovered.value, deaths.value]
                                    }]
                                }}
                                options={{
                                    legend: { display: false },
                                    title: { display: true, text: `Curret State in ${country}` }
                                }}
                            />
                        ) : (
                                ""
                            )
                    ) : (
                            dailyData.length  ? (
                                <Line 
                                    data = {{
                                        labels : dailyData.map(( { reportDate } )=> reportDate),
                                        datasets : [{
                                            data : dailyData.map(({ confirmed }) => confirmed.total),
                                            label: "Infacted",
                                            borderColor: "#3333ff",
                                            backgroundColor: "#87a0e6",
                                            fill: true,
                                        },{
                                            data : dailyData.map(({ deaths }) => deaths.total),
                                            label: "Deaths",
                                            borderColor: "red",
                                            backgroundColor: "rgba(255, 0, 0 , 0.5)",
                                            fill : true,
                                        }]
                                    }}
                                />
                            ) : (
                                ""
                            )
                    )

                }
             
            </div>

        )
    }
}