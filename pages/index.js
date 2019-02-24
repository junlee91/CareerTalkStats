import Head from 'next/head';

export default props => (
  <div>
    <Head>
      <title>Home | CareerTalk</title>
    </Head>
    <h1>{`page selection ${props.pageSelection}`}</h1>
  </div>
);
