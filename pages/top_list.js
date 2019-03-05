import Head from 'next/head';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Google',
    company_url: 'google.com',
    url: 'https://careers.google.com/',
    count: 100
  },
  {
    title: 'Apple',
    company_url: 'apple.com',
    url: 'https://www.apple.com/jobs/us/',
    count: 90
  },
  {
    title: 'Facebook',
    company_url: 'faceboook.com',
    url: 'https://www.facebook.com/careers/',
    count: 70
  },
  {
    title: 'Amazon',
    company_url: 'amazon.com',
    url: 'https://www.amazon.jobs/',
    count: 50
  }
];

export default () => (
  <div>
    <Head>
      <title>Top List | CareerTalk</title>
    </Head>
    <h1>This is Top List Page</h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => {
          const companyAvatar = <Avatar size="large" src={`//logo.clearbit.com/${item.company_url}`} />;
          return (
            <List.Item>
              <List.Item.Meta
                avatar={companyAvatar}
                title={(
                  <a href={item.url} target="_">
                    {item.title}
                  </a>
                )}
                description={item.url}
                style={{ width: '300px' }}
              />
            </List.Item>
          );
        }}
      />
    </div>
  </div>
);
