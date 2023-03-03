import { ArrowLeftOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Image } from "antd";
import Logo from "../../media/logo.png";
import Background from "../../media/background.png";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ margin: 0, padding: 0 }}>
        <Row
          style={{ backgroundColor: "#B6DBEF" }}
          justify="start"
          align="middle"
        >
          <Col span={2} style={{ cursor: "pointer" }} onClick={goBack}>
            <ArrowLeftOutlined style={{ fontSize: "24px", color: "#3E4095" }} />
          </Col>
          <Col offset={4} span={12}>
            <Image src={Logo} width={100} height={50} preview={false} />
          </Col>
        </Row>
      </Header>
      <Content>
        <Row
          justify="center"
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "#B6DBEF",
          }}
        >
          <Col
            xs={24}
            sm={22}
            md={20}
            lg={18}
            xl={16}
            xxl={14}
            style={{ height: "100%", zIndex: 1 }}
          >
            {children}
          </Col>
        </Row>
      </Content>
      <div style={{ position: "absolute", left: -5, bottom: -10 }}>
        <Image
          preview={false}
          src={Background}
          width={300}
          height={500}
          style={{ opacity: 0.5 }}
        />
      </div>
    </Layout>
  );
};

export default MainLayout;
