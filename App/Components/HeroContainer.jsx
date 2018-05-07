var React = require('react');

var HeroForm = require('HeroForm');
var HeroDisplay = require('HeroDisplay');

var MarvelAPI = require('MarvelAPI');

var HeroContainer = React.createClass({
    getInitialState() {

        var that = this;

        MarvelAPI.getHeroList().then((result) => {
            that.setState({
                heroList: result,
                isLoading: false
            });
        }).catch((err) => {
            console.log(err);
        });

        return {
            heroList: [],
            isLoading: true
        };
    },
    onHandleSearch(nameSearch) {

        var that = this;
        var heroListReturn = [];

        this.setState({
            isLoading: true
        });

        MarvelAPI.getHeroList(nameSearch).then((result) => {
            that.setState({
                isLoading: false,
                heroList: result
            });
        }).catch((err) => {
            console.log(err);
        });
    },
    render() {

        var that = this;
        var { isLoading } = this.state;

        var childStyle = {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: '73%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }

        function handleDisplayHero() {

            if (isLoading)
                return (
                    <div style={childStyle}>
                        <img className="center-block" src="Images/loading.gif" />;
                    </div >)
            else
                if (that.state.heroList && that.state.heroList.length)
                    return <HeroDisplay heroList={that.state.heroList} />;
                else
                    return <img className="img-responsive center-block" src="Images/hero-not-found.jpg" />;
        }

        return (
            <div style={{ minHeight: '250px' }} >
                <HeroForm onSearch={this.onHandleSearch} />

                {handleDisplayHero()}
            </div>
        )
    }
});

module.exports = HeroContainer;