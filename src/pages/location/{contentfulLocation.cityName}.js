import React from "react"
import Layout from '../../components/layout'

const LocationPage = (props) => {
	return (
		<Layout location={props.location}><h1>{props.params.cityName}</h1></Layout>

	)
}

export default LocationPage

