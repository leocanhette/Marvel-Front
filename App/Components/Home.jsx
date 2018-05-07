var React = require('react');

var NavComponent = require('Nav');

var Home = React.createClass({

    render() {
        return (

            <div>
                <NavComponent />
                <hr />
                {this.props.children}
            </div>
        );
    }
});

module.exports = Home;