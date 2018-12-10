import { connect } from "react-redux";
import component from "../../components/Form";
import { loginSubmit } from "../modules/authorization";

const mapStoreToProps = state => ({
    loggedIn: state.authorization.loggedIn,
    token: state.authorization.token
});

export default connect(
    mapStoreToProps,
    { loginSubmit }
)(component);
