var React = require('react');

var HeroDisplayItem = React.createClass({
    onDetailsClick(e) {
        e.preventDefault();
        this.props.onDetail(this.props.hero);
    },
    render() {

        return (
            <div className="panel panel-default" style={{ padding: '5px' }}>
                <div className="panel-body" onClick={this.onDetailsClick} >
                    <h4 className='fontSatisfy' style={{ textAlign: 'center', height: '30px' }}>{this.props.hero.name}</h4>
                    <img className="img-responsive center-block" src={this.props.hero.urlImg} style={{ width: '200px', height: '150px' }} />
                </div>
            </div>
        );
    }
});

module.exports = HeroDisplayItem;