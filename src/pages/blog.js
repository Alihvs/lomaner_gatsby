import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    juatify-content: space-evenly;
    border: 1px solid black;
    margin: 3px;
    // padding: 5px;
    height: 250px;
    flex: 1 49%;
`

const BlogPage = ({data}) => (
  <div>
    <Container>
        {data.allMarkdownRemark.edges.map(post => (
            <PostBox key={post.node.id}>
                    <h3 style={{
                        backgroundColor: 'red',
                        height: '15%',
                        textAlign: 'center'
                    }}>{post.node.frontmatter.title}</h3>
                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <p style={{flex: '1', fontSize: '.9rem'}}>{post.node.excerpt}</p>
                    <br/>
                    <Link to={post.node.frontmatter.path}>Read More</Link>
            </PostBox>
        ))}
    </Container>   
  </div>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                    id
                    excerpt
                }
            }
        }
    }
`

export default BlogPage
