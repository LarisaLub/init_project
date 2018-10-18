import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAllArticles } from "../AC";

class Books extends Component {
    componentDidMount() {
        this.props.onLoadAllArticles();
    }
    render() {
        console.log(this.props.books);
        return <div>Books</div>;
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
            dispatch(loadAllArticles());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);
