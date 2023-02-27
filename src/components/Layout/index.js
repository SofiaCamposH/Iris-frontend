import { Layout, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Layout style={{ height: "100%" }}>
        <Header style={{ margin: 0, padding: 0 }}>
          <Row
            style={{ backgroundColor: "gray" }}
            justify="start"
            align="middle"
          >
            <Col span={2}>flechita</Col>
            <Col offset={4} span={12}>
              Logo
            </Col>
          </Row>
        </Header>
        <Content>
          <Row justify="center" style={{ height: "100%" }}>
            <Col
              xs={24}
              sm={22}
              md={20}
              lg={18}
              xl={16}
              xxl={14}
              style={{ height: "100%" }}
            >
              {children}
            </Col>
          </Row>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
};

export default MainLayout;
