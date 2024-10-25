import { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { marker } from 'leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
});

const MapComponent = ({ latitude, longitude }) => {
    const position = [latitude, longitude];
    const markerRef = useRef(null);

    useEffect(() => {
        if(markerRef.current)
        {
            markerRef.current.leaflletElement.openPopup();
        }
    }, [])

    return (
        <MapContainer center={position}  zoom={2} className='map-container'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} ref={markerRef}>
                <Popup>You are here!</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
