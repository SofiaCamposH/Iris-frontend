import React from "react";
import "./App.css";
import { Image, Row } from "antd";
import { Route, Routes } from "react-router-dom";

import Sensors from "./pages/Sensors";
import MainLayout from "./components/Layout";
import UserList from "./components/List";
import Login from "./pages/Login";
import Image404 from "./media/404.png";
import HeartSensor from "./pages/HeartSensor";
import MovementSensor from "./pages/MovementSensor";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Row justify="start" align="middle" style={{ marginTop: 30 }}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="users" element={<UserList />} />
            <Route path="sensors" element={<Sensors />} />

            <Route path="sensors/heart" element={<HeartSensor />} />
            <Route path="sensors/movement" element={<MovementSensor />} />

            <Route
              path="*"
              element={<Image src={Image404} preview={false} />}
            />
          </Routes>
        </Row>
      </MainLayout>
    </div>
  );
}

export default App;
