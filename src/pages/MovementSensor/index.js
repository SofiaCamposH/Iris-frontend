import React, { useEffect } from "react";

import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, DatePicker, Table } from "antd";

import { getMovement } from "../../api";
import { format, parseISO } from "date-fns";
import dayjs from "dayjs";
const columns = [
  {
    title: "Last Movements",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => format(parseISO(text), "yyyy-MM-dd HH:mm:ss"),
    align: "center",
  },
];
const MovementSensor = () => {
  const [movements, setMovements] = React.useState([]);
  const [currentMovement, setCurrentMovement] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovement();
      setMovements(groupMovementsByDate(result));
    };
    fetchData();
  }, []);

  const groupMovementsByDate = (movements) => {
    const movementsByDate = movements.reduce((acc, movement) => {
      const date = format(parseISO(movement.createdAt), "yyyy-MM-dd");
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(movement);
      return acc;
    }, {});
    return movementsByDate;
  };

  const disableDatesAfterToday = (current) => {
    return current && current > dayjs().endOf("day");
  };

  const onChange = (date, dateString) => {
    if (movements[dateString]) {
      setCurrentMovement(movements[dateString]);
    } else {
      setCurrentMovement([]);
    }
  };

  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <DatePicker
        inputReadOnly
        disabledDate={disableDatesAfterToday}
        onChange={onChange}
        defaultValue={dayjs()}
        style={{
          width: "100%",
          marginBottom: 20,
        }}
      />
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={(currentMovement.length * 100) / 16}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={((16 - currentMovement.length) * 100) / 16}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Table
        pagination={{ pageSize: 2 }}
        columns={columns}
        dataSource={currentMovement}
        style={{ marginTop: 20, width: "100%" }}
      />
    </div>
  );
};

export default MovementSensor;
