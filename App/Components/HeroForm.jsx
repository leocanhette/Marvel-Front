var React = require('react');

var HeroForm = React.createClass({

    onFormSubmit(e) {
        e.preventDefault();

        var NameSearch = this.refs.txtNameSearch.value;

        this.refs.txtNameSearch.value = '';
        this.props.onSearch(NameSearch);
    },
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="col-xs-3">
                        <span className="display-4 fontLobster">Name of Hero:</span>
                    </div>
                    <div className="col-md-7">
                        <input className="form-control" placeholder="Insira o nome do herói" ref="txtNameSearch" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-default btn-sm">
                            <span className="glyphicon glyphicon-search"></span> Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
});

module.exports = HeroForm;