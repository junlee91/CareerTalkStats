import React from 'react';
import App, { Container } from 'next/app';
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

  state = {
    collapsed: true,
    pageSelection: 1
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  onNavChange = option => {
    this.setState({ pageSelection: option });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" onClick={() => this.onNavChange(1)}>
                <Icon type="home" />
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={() => this.onNavChange(2)}>
                <Icon type="pie-chart" />
                <span>Stats</span>
              </Menu.Item>
              {/* <Menu.Item key="9" onClick={() => this.onNavChange(3)}>
                <Icon type="file" />
                <span>File</span>
              </Menu.Item> */}
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
