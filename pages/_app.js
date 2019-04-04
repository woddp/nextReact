import App, {Container} from 'next/app'
import Head from  'next/head'
import React from 'react'
import  'flex.css'
// import  'https://b-gold-cdn.xitu.io/ionicons/2.0.1/css/ionicons.min.css'
export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }
    render () {
        const {Component, pageProps} = this.props;
        return (
            <div>
                <Container>
                    <Head>
                        <title>My new cool app</title>
                        <link href="https://b-gold-cdn.xitu.io/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
                    </Head>
                    <Component   {...pageProps} />
                </Container>
            </div>

        )
    }
}