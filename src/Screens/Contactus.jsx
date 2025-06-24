
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
