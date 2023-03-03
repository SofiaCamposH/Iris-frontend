import { Col } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Col span={24}>
        <Link
          style={{
            backgroundColor: "#5C8AB0",
            height: "50px",
            width: "90%",
            margin: "5%",
            marginTop: "50%",
            borderRadius: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/users"
        >
          <h1 style={{ color: "white", margin: 0 }}>Comenzar Demo</h1>
        </Link>
      </Col>
    </>
  );
};
export default Login;
