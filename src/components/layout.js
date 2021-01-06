import React from "react"
import { graphql, Link, StaticQuery } from 'gatsby'
import "../styles/globals.css";

export default function Layout(props) {

	return (
		<StaticQuery
			query={graphql`
        query {
        allContentfulSimplePage {
						nodes {
                simplePagePath: gatsbyPath(filePath: "/{contentfulSimplePage.title}")
                title
						} 
        }
          allContentfulLocation {
						nodes {
                locationPagePath: gatsbyPath(filePath: "/location/{contentfulLocation.cityName}")
                cityName
						} 
        }
    }
      `}
			render={data => {
				const allSimplePages = data.allContentfulSimplePage.nodes || []
				return(
				<div>
					<ul className="nav main-nav">
						{allSimplePages.map(page => (
						<li key={page.simplePagePath}>
							<Link to={page.simplePagePath}>{page.title}</Link>
						</li>
					))}
					</ul>
					{props.location.pathname.includes('location') && <ul className="nav sub-nav">
						{data.allContentfulLocation.nodes.map(page => (
							<li key={page.locationPagePath}>
								<Link to={page.locationPagePath}>{page.cityName}</Link>
							</li>
						))}
					</ul>}
					<div className="view">
					{props.children}
					</div>
				</div>
			)}}
		/>

	)
}
