import React from 'react';
import App, { Container } from 'next/app';
import Link from 'next/link';
import { Layout, Menu, Icon } from 'antd';
import NProgress from 'next-nprogress/component';
import withNProgress from 'next-nprogress';

const { Header, Content, Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentWillMount() {
    const {
      router: { route }
    } = this.props;
    let defaultKey = '1';

    if (route === '/stats') {
      defaultKey = '2';
    }

    this.setState({
      collapsed: true,
      defaultKey
    });
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <NProgress color="#29d" spinner />
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo">
              <img className="logo-image" src="/static/images/logo_transparent.png" alt="" />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[this.state.defaultKey]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link href="/">
                  <a>
                    <Icon type="home" />
                    <span>Home</span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link href="/stats">
                  <a>
                    <Icon type="pie-chart" />
                    <span>Stats</span>
                  </a>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 20px', marginTop: 64, minHeight: '80vh' }}>
            <Component {...pageProps} {...this.state} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Container>
    );
  }
}

const msDelay = 200;
const options = { trickleSpeed: 50 };
export default withNProgress(msDelay, options)(MyApp);
