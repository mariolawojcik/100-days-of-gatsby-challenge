import React from "react"
import Layout from '../components/layout'

const SimplePage = (props) => {
	return (
		<Layout location={props.location}>
			<h1>{props.params.title}</h1>
		</Layout>
	)
}

export default SimplePage

