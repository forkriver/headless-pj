import Head from 'next/head'
import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'https://patrickjohanneson.com/wp-json/wp/v2/posts')

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <Head>
        <title>Posts</title>
        </Head>
        <h1>Our Posts Page!</h1>
        <ul>
          {
            this.props.posts.map( post => {
              return (
              <li key={ post.id }>
                  <Link href={ `/posts/${ post.slug }` }>
                      <a href={ `/posts/${ post.slug }` }>
                          { post.title.rendered }
                      </a>
                  </Link>
              </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
 }
}