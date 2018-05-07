var React = require('react');

var HeroDisplayItemComponent = require('HeroDisplayItem');
var HeroDetail = require('HeroDetail');

var HeroDisplay = React.createClass({
    getInitialState() {
        return {};
    },
    handleDetail(hero) {
        this.setState({
            hero: hero
        });
    },
    render() {

        var that = this;

        function handleItemHero() {
            var components = that.props.heroList.map(element => {
                return (
                    <div className="col-md-3">
                        <HeroDisplayItemComponent key={element.id} hero={element} onDetail={that.handleDetail} />
                    </div>)
            });

            return (
                <div className="row">
                    {components}
                </div>
            );
        }

        function handleDetailHero() {
            if (that.state.hero)
                return <HeroDetail hero={that.state.hero} />;
        }

        return (
            <div>
                {handleDetailHero()}
                <hr />
                {handleItemHero()}
            </div>
        )
    }
});

module.exports = HeroDisplay;