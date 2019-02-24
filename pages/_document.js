import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="CareerTalk Team" content={"CareerTalk Stats"} />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.13.6/antd.min.css"
            rel="stylesheet"
          />
          <link href="/static/styles.css" rel={"stylesheet"} />
          <meta name="theme-color" content="black" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
