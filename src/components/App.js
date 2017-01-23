import { Component } from 'react'
import { Header } from './Header'
import { EntriesList } from './EntriesList'
// import { Form } from './Form'
import { AddEntryForm } from './AddEntryForm'
import { DoughnutChart } from './DoughnutChart'
import { Menu } from './Menu'

export class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: "Nom Noms",
            subTitle: "Encouraging mindful nutrition throughout the day",
            entries: [
                {
                    time: '7:00AM',
                    meal: 'Scrambled eggs and toast',
                    good: true,
                    okay: false,
                    bad: false
                }
            ],
            // To access chart data values: chartData.datasets[0].data
            chartData: {
                    labels: ['Healthy', 'Average', 'Unhealthy'],
                    datasets: [
                        {
                            data: [1, 2, 3],
                            backgroundColor: [
                                '#68D286',
                                '#FBAD2F',
                                '#EB585C'
                            ],
                            hoverBackgroundColor: [
                           '#68D286',
                           '#FBAD2F',
                           '#EB585C'
                           ]
                        }
                    ],
                    options: {
                        cutoutPercentage: 50,
                        datasetStrokeWidth : 5,
                        elements: {
                            arc: {
                                borderWidth: 2
                            }
                        },
                        legend: {
                            labels: {
                                boxWidth: 20,
                                padding: 25
                            }
                        },
                        title: {
                            display: true,
                            text: 'Custom Chart Title'
                        }
                    }
            } // chartData

        }; // state

        this.addEntry = this.addEntry.bind(this)

    } // constructor

    // add new day function
    addEntry(newEntry) {
        let chartDataGood = this.state.chartData.datasets[0].data[0]
        console.log(newEntry.good)
        if (newEntry.good) {
            console.log('good entry')
        } else if (newEntry.okay) {
            console.log('okay entry')
        } else if (newEntry.bad) {
            console.log('bad entry')
        }

        this.setState({
            entries: [
                ...this.state.entries,
                newEntry
            ]
        })
    }


    render() {
        return (
            <div className="app-container">
                <Menu />
                {
                    (this.props.location.pathname === "/") ?
                    <Header title={this.state.title} subTitle={this.state.subTitle} /> :
                    (this.props.location.pathname === "/add-entry") ? <AddEntryForm onNewEntry={this.addEntry} /> :
                    (this.props.location.pathname === "/view-chart") ? <DoughnutChart vals={this.state.chartData}/> :
                    (this.props.location.pathname === "/view-list") ?
                    <EntriesList entries={this.state.entries}/> : null
                }
                {/* <Header title={this.state.title} subTitle={this.state.subTitle} />
                <DoughnutChart vals={this.state.chartData}/>
                <AddEntryForm onNewEntry={this.addEntry} />
                <EntriesList entries={this.state.entries}/> */}
            </div>
        ) // return
    } // render
}
