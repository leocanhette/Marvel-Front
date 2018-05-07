var React = require('react');

var HeroDetail = React.createClass({
    render() {

        return (
            <div className="panel panel-primary">
                <div className="panel-body" style={{ height: '200px' }}>
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-responsive center-block" style={{ height: '170px' }} src={this.props.hero.urlImg} />
                        </div>
                        <div className="col-md-9">
                            <h1 className="fontLobster">{this.props.hero.name}</h1>
                            <p className="primary-text">{this.props.hero.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = HeroDetail;