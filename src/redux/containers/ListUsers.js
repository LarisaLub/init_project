import { connect } from "react-redux";
import component from "../../components/ListUsers";
import { getUsers } from "../modules/listusers";

const mapStoreToProps = state => {
    return {
        users: state.listusers.users
    };
};

export default connect(
    mapStoreToProps,
    { getUsers }
)(component);
