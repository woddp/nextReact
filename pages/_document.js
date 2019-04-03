import Document, { Head, Main, NextScript} from 'next/document'


export default class MyDocument extends Document {

    render() {
        return (
            <html>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />

            <Head>
                <style>{`body { margin: 0 } /* custom! */`}</style>

            </Head>
            <body className="custom_class">
            <Main />

            <NextScript />
            </body>
            </html>
        )
    }
}