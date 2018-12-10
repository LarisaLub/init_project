import { connect } from "react-redux";
import component from "../../components/ListPlaces";
import { getPlaces } from "../modules/location";

const mapStoreToProps = state => ({
    places: state.location.places
});

export default connect(
    mapStoreToProps,
    { getPlaces }
)(component);
