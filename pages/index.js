import Head from "next/head";
import { Layout, Menu, Icon } from "antd";

const { Content, Footer, Sider } = Layout;

export default () => (
  <div>
    <Head>
      <title>Home | CareerTalk</title>
    </Head>
    <LayoutComponent />
  </div>
);

class LayoutComponent extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                textAlign: "center",
                minHeight: "80vh"
              }}
            >
              content
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
