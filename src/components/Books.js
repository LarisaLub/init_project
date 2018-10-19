import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAllbook } from "../AC";

class Books extends Component {
    componentDidMount() {
        this.props.onLoadAllArticles();
    }
    render() {
        return (
            <div>
                <button> interesting places</button> <br />
                <button> close interesting places</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadAllArticles: () => {
            dispatch(loadAllbook());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);
