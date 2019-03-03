import Head from 'next/head';
import { Bar, Pie } from 'react-chartjs-2';

const data = {
  labels: ['IOS', 'Android'],
  datasets: [
    {
      data: [339, 226],
      backgroundColor: ['#1eb1f9', '#76c159']
    }
  ]
};

const barData = {
  labels: ['Past Career Fair', '2/13 Career Fair'],
  datasets: [
    {
      label: 'Downloads',
      backgroundColor: ['#3e95cd', '#8e5ea2'],
      data: [233, 565]
    }
  ]
};

const options = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  responsive: false
};

const barOptions = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  responsive: false
};

export default () => (
  <div>
    <Head>
      <title>Stats | CareerTalk</title>
    </Head>
    <h1>CareerTalk Stats</h1>

    <div className="father">
      <div className="box">
        <div style={{ width: 350, height: 350 }}>
          <Pie data={data} options={options} width={350} height={350} />
        </div>
        <div style={{ marginTop: 15 }}>
          <h2>Total downloads in 2/13 Career Fair: 565</h2>
          <h3>IOS: 339</h3>
          <h3>Android: 226</h3>
        </div>
      </div>
      <div className="box">
        <div style={{ width: 350, height: 350 }}>
          <Bar data={barData} options={barOptions} width={350} height={350} />
        </div>
        <div style={{ marginTop: 15 }}>
          <h2>Increased downloads</h2>
          <h3>2/13 Fair: 565</h3>
          <h3>Last Fair: 233</h3>
        </div>
      </div>
      <div className="box">
        <div style={{ marginTop: 15 }}>
          <h2>Total downloads overall: 798</h2>
          <h3>Google Sign in Users: 520</h3>
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .father {
          display: grid;
          grid-gap: 30px;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          width: 100%;
        }

        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    </style>
  </div>
);
