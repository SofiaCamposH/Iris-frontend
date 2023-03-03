import React from "react";
import "./App.css";
import { Image, Row } from "antd";
import { Route, Routes } from "react-router-dom";

import Sensors from "./pages/Sensors";
import MainLayout from "./components/Layout";
import UserList from "./components/List";
import Login from "./pages/Login";
import Image404 from "./media/404.png";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Row justify="start" align="middle" style={{ marginTop: 30 }}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/sensors" element={<Sensors />} />

            <Route path="*" element={<Image src={Image404} />} />
          </Routes>
        </Row>
      </MainLayout>
    </div>
  );
}

export default App;
