import Head from 'next/head';
import { Row, Col } from 'antd';
import { Doughnut, Pie } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ['#e74c3c', '#f1c40f', '#2980b9']
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ['Red', 'Yellow', 'Blue']
};

const options = {
  legend: {
    position: 'bottom'
  }
};

export default () => (
  <div>
    <Head>
      <title>Stats | CareerTalk</title>
    </Head>
    <h1>CareerTalk Stats</h1>
    <Row gutter={40}>
      <Col key="1" span={12}>
        <Doughnut data={data} options={options} />
      </Col>
      <Col key="2" span={12}>
        <Pie data={data} />
      </Col>
    </Row>
  </div>
);
