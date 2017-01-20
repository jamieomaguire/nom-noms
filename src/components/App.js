import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/style.scss';
import { Header } from './Header';
import { EntriesList } from './EntriesList';

window.React = React;

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: "Nom Noms",
            subTitle: "Encouraging mindful nutrition throughout the day",
            entries: [
                {
                    time: '7:00AM',
                    meal: 'Scrambled eggs and toast',
                    value: 'Good',
                    birthday: true,
                    goatEater: false
                },
                {
                    time: '9:45AM',
                    meal: 'Apple',
                    value: 'Good',
                    birthday: false,
                    goatEater: true
                },
                {
                    time: '12:30PM',
                    meal: 'Ready salted crisps',
                    value: 'Bad',
                    birthday: true,
                    goatEater: false
                },
                {
                    time: '7:00AM',
                    meal: 'Scrambled eggs and toast',
                    value: 'Good',
                    birthday: true,
                    goatEater: false
                },
                {
                    time: '9:45AM',
                    meal: 'Apple',
                    value: 'Good',
                    birthday: false,
                    goatEater: true
                },
                {
                    time: '12:30PM',
                    meal: 'Ready salted crisps',
                    value: 'Bad',
                    birthday: true,
                    goatEater: false
                }
            ]
        }; // state

    } // constructor

    handleClick() {
        console.log(this); // React Component Instance
    }


    render() {
        return (
            <div className="app-container">
                <Header title={this.state.title} subTitle={this.state.subTitle} />
                <EntriesList entries={this.state.entries}/>
            </div>
        ); // return
    } // render
}


ReactDOM.render(
    <App />,
    document.getElementById('react-container')
)
