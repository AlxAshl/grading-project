
import {useRef, useEffect} from 'react';
import L, {Icon, LatLng, Marker} from 'leaflet';
import useMap from '../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { PLACE_LOCATION, ICON_URL } from '../../const';

export type LocationType = {
  lat: number,
  lng: number,
  zoom: number
}

const defaultCustomIcon = new Icon({
  iconUrl: ICON_URL,
  iconSize: [30, 40],
  iconAnchor: [15, 40]
});
let marker: Marker;

function Map(): JSX.Element {

  const location = PLACE_LOCATION
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView(new LatLng(location.lat, location.lng));
      marker = L.marker({
        lat: location.lat,
        lng: location.lng
      });
      marker
        .setIcon(defaultCustomIcon)
        .addTo(map)
      map.setZoom(13)
    }
  }, [map, location]);

  return <div style={{height: '336', width: '649px'}} title="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5" ref={mapRef} ></div>;
}

export default Map;

