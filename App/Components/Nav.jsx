var React = require('react');

var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
    render() {

        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="https://github.com/facebook/react" target="_blank">
                                <img className="img-responsive" src="Images/react-logo.png" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://developer.marvel.com/" target="_blank">
                                <img className="img-responsive" src="Images/marvel-logo.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <IndexLink to="/" className="nav-link active" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;