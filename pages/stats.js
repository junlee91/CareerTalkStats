import Head from 'next/head';
import { Bar, HorizontalBar, Pie } from 'react-chartjs-2';

/**
 * Bar Data
 */
const data = {
  labels: ['IOS', 'Android'],
  datasets: [
    {
      data: [479, 319],
      backgroundColor: ['#1bc1fb', '#76c159']
    }
  ]
};

const barData = {
  labels: ['Last Career Fair', '2/13 Career Fair'],
  datasets: [
    {
      label: 'Downloads',
      backgroundColor: ['#f6e58d', '#f39c12'],
      data: [233, 565]
    }
  ]
};

const horizontalBarData = {
  labels: ['Assets'],

  datasets: [
    {
      label: ['Google User'],
      data: [520],
      backgroundColor: '#29a645'
    },
    {
      label: ['Default User'],
      data: [45],
      backgroundColor: '#D3D3D3'
    }
  ]
};

/**
 * Bar Options
 */
const options = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
};

const barOptions = {
  legend: {
    display: false
  },
  maintainAspectRatio: false
};

const horizontalBarOptions = {
  tooltips: {
    enabled: false
  },
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        ticks: {
          display: false
        },
        stacked: true
      }
    ]
  },
  legend: {
    display: false
  },
  maintainAspectRatio: false,
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
          <h2>Total downloads: 798</h2>
          <h3>IOS: 479</h3>
          <h3>Android: 319</h3>
        </div>
      </div>
      <div className="box">
        <div style={{ width: 350, height: 350 }}>
          <Bar data={barData} options={barOptions} width={350} height={350} />
        </div>
        <div style={{ marginTop: 15 }}>
          <h2>Downloads by fairs</h2>
          <h3>2/13 Career Fair: 565</h3>
          <h3>Last Career Fair: 233</h3>
        </div>
      </div>
      <div className="box">
        <div style={{ width: 350, height: 100 }}>
          <HorizontalBar
            data={horizontalBarData}
            options={horizontalBarOptions}
            width={350}
            height={350}
          />
        </div>
        <div style={{ marginTop: 15 }}>
          <h2>Google Sign in Users: 520</h2>
          <h3>Total downloads in 2/13 Career Fair: 565</h3>
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
          justify-content: center;
        }
      `}
    </style>
  </div>
);
