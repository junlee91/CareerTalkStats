import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Home | CareerTalk</title>
    </Head>
    <div className="home-content">
      <div className="content">
        <div className="home-logo-box">
          <img src="/static/images/ignite_logo.png" alt="CareerTalk" />
        </div>
      </div>
      <div className="market-content">
        <a href="https://play.google.com/store/apps/details?id=com.careertalk" target="_">
          <img src="/static/images/google_play.png" alt="Google Play" />
        </a>
        <a href="https://itunes.apple.com/us/app/careertalk-find-your-jobs/id1435448112" target="_">
          <img src="/static/images/app_store.png" alt="Google Play" />
        </a>
      </div>
    </div>
    <style jsx>
      {`
        .home-content {
          padding: 10px 60px;
        }

        .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, 1fr);
          width: 100%;
        }

        .home-logo-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .home-logo-box img {
          width: 100%;
          max-width: 450px;
          height: auto;
        }

        .market-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .market-content img {
          width: 100%;
          max-width: 300px;
          height: auto;
          margin: -25px 0px -25px 0px;
        }
      `}
    </style>
  </div>
);
