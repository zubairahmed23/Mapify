import { useState, useEffect } from 'react';
import MapComponent from './Components/MapComponent';

function App() {
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  useEffect(() => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
    } else {
      alert("Geolocation is not available in your browser");
    }
  }, []);

  return (
    <>
      <h1 className="mapify-header">Mapify</h1>
      <hr></hr>
      <h3 className='latitude'>Latitude: {latitude}</h3>
      <h3 className='longitude'>Longitude: {longitude}</h3>
      <br />
      <MapComponent latitude={latitude} longitude={longitude} />
    </>
  );
}

export default App;
