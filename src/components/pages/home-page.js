import React, {Component} from 'react';
import SearchFilter from "../search-filter";
import {connect} from "react-redux";

class HomePage extends Component {
    onSearchBy = (filter) => {
        console.log(filter)
        // this.setState({
        //     searchByFilter: filter
        // })
    };

    render() {
        return (
            <>
                <SearchFilter
                    searchByFilter={this.props.filmFilter.searchByFilter}
                    onSearchBy={this.onSearchBy}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmFilter: state.filmFilter
    }
};

const mapDispatchToProps = dispatch => ({
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
