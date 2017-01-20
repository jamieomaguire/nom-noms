var React = require('react');
var ReactDOM = require('react-dom');

require('../scss/style.scss');

var Header = require('./Header');

class App extends React.Component {
    render() {
        return (
            <Header title="Nom Noms" subTitle="Encouraging mindful nutrition"/>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react-container')
);
