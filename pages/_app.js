import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import '../styles/app.css'

export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Test Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
