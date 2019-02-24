import React from 'react';
import App, { Container } from 'next/app';
import Link from 'next/link';
import { Layout, Menu, Icon } from 'antd';

const { Content, Footer, Sider } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentWillMount() {
    const { router: { route } } = this.props;
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
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={[this.state.defaultKey]} mode="inline">
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
          </Sider>

          <Layout>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div
                style={{
                  padding: 24,
                  background: '#fff',
                  textAlign: 'center',
                  minHeight: '80vh'
                }}
              >
                <Component {...pageProps} {...this.state} />
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
