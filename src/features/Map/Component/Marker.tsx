import { Marker as MarkerMain, Popup } from 'react-leaflet'
import {LatLngExpression} from "leaflet";

const Marker = ({ position, text }: {position: LatLngExpression, text: string}) => {
    if (!position) return null

    return (
        <MarkerMain position={position}>
            <Popup>{text}</Popup>
        </MarkerMain>
    )
}

export default Marker
