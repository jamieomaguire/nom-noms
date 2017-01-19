var React = require('react');
var ReactDOM = require('react-dom');

require('./scss/style.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App title="Nom Noms" subTitle="Encouraging mindful nutrition" />,
    document.getElementById('react-container')
);
