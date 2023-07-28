
import {LatLngExpression} from 'leaflet'
import {MapContainer, Polyline, Popup, TileLayer} from 'react-leaflet'
import  { useEffect, useState } from 'react'
import {useAppSelector} from "../../../services/hooks/ReduxHooks/useAppSelector.ts";
import {selectRoute, selectSpace} from "../../routeSaga/routerSlice.ts";
import AutoFitBound from "./AutoFitBound.ts";
import Marker from "./Marker.tsx";

export const MapComponent = () => {
    const zoom = 13;

    const coordinates = useAppSelector(selectSpace)
    const center:LatLngExpression = [59.924158477766674, 30.352364739995654];
    const route = useAppSelector(selectRoute)
    const [points, setPoints] = useState([]);
    const [originMarker, setOriginMarker] = useState(null)
    const [spaceMarker, setSpaceMarker] = useState(null)
    const [destinationMarker, setDestinationMarker] = useState(null)
    const [bounds, setBounds] = useState([])

    useEffect(() => {
        if (route) {

            const points = route.routes[0].geometry.coordinates.map(arr => [arr[1], arr[0]])
            setPoints(points)
            const originPoint = {
                lat: coordinates.original[0],
                lng: coordinates.original[1]
            }
            const destinationPoint = {
                lat: coordinates.destination[0],
                lng: coordinates.destination[1]
            }
            const spacePoint = {
                lat: coordinates.space[0],
                lng: coordinates.space[1]
            }
            setOriginMarker(originPoint)
            setDestinationMarker(destinationPoint)
            setSpaceMarker(spacePoint)
            const newBounds = [originPoint, spacePoint, destinationPoint].map(m => [m.lat, m.lng])
            setBounds(newBounds)
            console.log('newBounds' + newBounds);
        }
    }, [coordinates])

    const handleSetBounds = bounds => {
        setBounds(bounds)
    }

    return (
        <MapContainer bounds={bounds} center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />

            <Polyline color={'blue'} weight={8} positions={points}>
                <Popup>Polygon</Popup>
            </Polyline>
            {originMarker && <Marker position={originMarker} text='Погрузка' />}

            {destinationMarker && <Marker position={destinationMarker} text='Разгрузка 2' />}

            {spaceMarker && <Marker position={spaceMarker} text='Разгрузка 1' />}
            <AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds} />
        </MapContainer>
    )
}
