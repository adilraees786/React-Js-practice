// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-map-react';

// class ContactUs extends Component {
//   render() {
//     return (
//       <div>
//         <Map
//           google={this.props.google}
//           zoom={10}
//           initialCenter={{
//             lat: 24.8546842,
//             lng: 67.0207055
//           }}
//           style={{
//             width: '100%',
//             height: '100%',
//             position: 'relative'
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB9B8fcCKugprNNeE6DlqoPM-OuzUBZ0lE"
// })(ContactUs);


import React from 'react';
import GoogleMapReact from 'google-map-react';

const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 24.8546842,
      lng: 67.0207055
    },
    zoom: 10
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB9B8fcCKugprNNeE6DlqoPM-OuzUBZ0lE' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
};

export default ContactUs;
