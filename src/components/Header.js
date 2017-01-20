var React = require('react');

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
                <button>Clicketh me</button>
            </div>
        )
    }
}

module.exports = Header;
