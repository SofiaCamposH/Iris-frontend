import { Layout, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Layout style={{ height: "100%" }}>
        <Header>Header</Header>
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
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default MainLayout;
