import { connect } from "react-redux";
import component from "../../components/ListPlaces";
import { getPlaces, setActiveLocation } from "../modules/location";

const mapStoreToProps = state => ({
    places: state.location.places,
    activeLocation: state.payload
});

export default connect(
    mapStoreToProps,
    { getPlaces, setActiveLocation }
)(component);
