var React = require('react');

var About = React.createClass({
    render() {

        var childStyle = {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }

        return (
            <div style={{ minHeight: '250px' }} >
                <h1 className="display-4 fontLobster">About</h1>
                <img className="img-responsive" style={{ height: '170px' }} src='Images/batman-about.gif' />
                <div style={childStyle}>
                    <h4 className="text-default">This is a page for rendering a simple request with React.</h4>
                </div>
            </div >
        )
    }
});

module.exports = About;

