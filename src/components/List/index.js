import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Space, Badge } from "antd";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const UserAvatar = () => {
  return (
    <Space size={24}>
      <Badge dot>
        <Avatar shape="circle" icon={<UserOutlined />} />
      </Badge>
    </Space>
  );
};

const UserList = () => {
  const [data] = useState([
    {
      name: {
        first: "Demo",
        last: "Iris",
      },
      email: "admin@iris.com",
    },
  ]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/sensors");
  };

  return (
    <>
      {data.map((item) => (
        <Col span={24} key={item.email}>
          <div
            style={{
              backgroundColor: "white",
              width: "90%",
              height: 50,
              borderRadius: 50,
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              margin: "5%",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
            }}
            onClick={handleNavigate}
          >
            <div style={{ marginLeft: "2%" }}>
              <UserAvatar />
            </div>
            <div style={{ marginLeft: 10 }}>
              <div
                style={{ textAlign: "start" }}
              >{`${item.name.first} ${item.name.last}`}</div>
              <div>{item.email}</div>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};
export default UserList;
