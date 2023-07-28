
const routerApi = {
	async getRoute(routeObject) {
		const original = [...routeObject.original].reverse().join(',')
		const destination = [...routeObject.destination].reverse().join(',')
		const space = [...routeObject.space].reverse().join(',')
		const response = await fetch(
			`https://router.project-osrm.org/route/v1/driving/${original};${space};${destination}?steps=true&geometries=geojson&overview=full`
		)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		return response.json()
	}
}


export default routerApi
