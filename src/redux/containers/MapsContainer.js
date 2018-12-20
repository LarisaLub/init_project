import { connect } from "react-redux";
import Map from "../../components/Maps";
import { getPlaces, setActiveLocation, getCurrentLocs } from "../modules/location";
import { selectPlaces } from "../../filter";

const mapStoreToProps = (state, ownProps) => ({
    currentPosition: state.location.currentPosition,
    plaсe: selectPlaces(state, ownProps.match.params.id)
});

export default connect(
    mapStoreToProps,
    { getPlaces, setActiveLocation, getCurrentLocs }
)(Map);
