import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

import blogStyles from "./blog.module.scss";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
               {data.allMarkdownRemark.edges.map(val => <li className={blogStyles.post}><Link to={`/blog/${val.node.fields.slug}`}><h2>{val.node.frontmatter.title}</h2><p>{val.node.frontmatter.date}</p></Link></li>)}
            </ol>
        </Layout>
    )
}

export default BlogPage;