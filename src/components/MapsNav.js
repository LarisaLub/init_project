import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { geolocated } from "react-geolocated";
import LocationOnIcon from "@material-ui/icons";
import { NavLink } from "react-router-dom";


class MapsNav extends React.Component {
    render() {
        
      return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? <table>
              <tbody>
                <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
              </tbody>
            </table>
            : <div>Getting the location data&hellip; </div>;
    }
  }

  MapsNav.propTypes = Object.assign({}, MapsNav.propTypes, geoPropTypes);

MapsNav.propTypes = {...MapsNav.propTypes, ...geoPropTypes};
 


  {
    coords: {
        latitude,
        longitude,
        altitude,
        accuracy,
        altitudeAccuracy,
        heading,
        speed,
    }    
   // isGeolocationAvailable, 
    //isGeolocationEnabled, 
   // positionError, 
{
    positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity,
    },
    watchPosition: false,
    userDecisionTimeout: null,
    suppressLocationOnMount: false,
    geolocationProvider: navigator.geolocation
}
  export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(MapsNav);


// const styles = {
//     root: {
//         width: 500
//     }
// };

// class SimpleBottomNavigation extends React.Component {
//     state = {
//         value: 0
//     };

//     handleChange = (event, value) => {
//         this.setState({ value });
//     };

//     render() {
//         const { classes } = this.props;
//         const { value } = this.state;

//         return (
//             <BottomNavigation
//                 value={value}
//                 onChange={this.handleChange}
//                 showLabels
//                 className={classes.root}>
//                 <BottomNavigationAction label="Nearby" />
//             </BottomNavigation>
//         );
//     }
// }

// // SimpleBottomNavigation.propTypes = {
// //     classes: PropTypes.object.isRequired
// // };

// export default withStyles(styles)(SimpleBottomNavigation);
