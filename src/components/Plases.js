import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAllplases } from "../AC";

class Plases extends Component {
    componentDidMount() {
        this.props.onLoadAllArticles();
    }

    render() {
        console.log(this.props.plases);
        if (!this.props.plases) return null;
        return (
            <div className="Plases">
                {this.props.plases.map(plase => (
                    <p key={plase.id}>{plase.title}</p>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        plases: state.plases.plases
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadAllArticles: () => {
            dispatch(loadAllplases());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Plases);
