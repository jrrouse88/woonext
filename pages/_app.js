import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return(
            <React.Fragment>
                <Head>
                    <title>Test Store</title>
                    <meta charSet="utf-8" />
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        )
    }
}

export default MyApp;