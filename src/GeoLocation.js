import React from 'react';
import {geolocated} from 'react-geolocated';

class GeoLocation extends React.Component
{
        constructor(props)
        {
          super(props)
          this.state ={

                coordinatesReady: false,
                checkLocationNotEnabled: false
          }
        }

        checkLocation()
        {
                  if (this.props.isGeolocationEnabled === true){

                       var coords = this.props.coords
                       if (coords != null && this.state.coordinatesReady == false)
                        {
                                this.setState({coordinatesReady: true})
                                this.props.getItems(coords.latitude, coords.longitude)
                                this.props.setLocationEnabled()
                        }
                 }

                 else{

                        if (this.state.checkLocationNotEnabled == false)
                        {
                                this.setState({checkLocationNotEnabled: true})
                                this.props.setLocationDisabled()
                        }
                 }
        }

        render()
        {

                this.checkLocation()
                return(
                        <div></div>
                )

                // return !this.props.isGeolocationAvailable
                // ? <div>Your browser does not support Geolocation</div>
                // : !this.props.isGeolocationEnabled
                //   ? <div>Geolocation is not enabled</div>
                //   : this.props.coords
                //     ? <table>
                //       <tbody>
                //         <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                //         <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                //         <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                //         <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                //         <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
                //       </tbody>
                //     </table>
                //     : <div>Getting the location data&hellip; </div>;
        }
}

export default geolocated({


        positionOptions: {
          enableHighAccuracy: false,
        },

        userDecisionTimeout: 5000,
      })(GeoLocation);