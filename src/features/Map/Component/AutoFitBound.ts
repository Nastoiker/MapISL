import { useMap } from 'react-leaflet'
import {useEffect} from "react";

const AutoFitBound = ({ bounds }) => {
    const map = useMap()
    useEffect(() => {
        if (!map || bounds.length === 0) return
        map.fitBounds(bounds)
    }, [map, bounds])
    return null
}

export default AutoFitBound
