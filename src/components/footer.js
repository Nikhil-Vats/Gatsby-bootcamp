import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetaData {
                    author
                }
            }
        }
    `)
    return (
        <div>
            <p>Created by {data.site.siteMetaData.author}, © 2019.</p>
        </div>
    )
}

export default Footer;