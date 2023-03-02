import React from "react";
import "./App.css";
import { Row } from "antd";

import OptionCard from "./components/Card";
import MainLayout from "./components/Layout";

const cards = [
  { url: "https://e7.pngegg.com/pngimages/113/442/png-clipart-computer-icons-pulse-electrocardiography-heart-rate-medicine-others-love-blue.png", title: "Heart Rate", description: "Check the heart rate history" },
  { url: "https://cdn-icons-png.flatichttps://cdn-icons-png.flaticon.com/512/1632/1632969.pngon.com/512/1633/1633071.png", title: "Movement", description: "Check the movement history", },
  { url: "https://cdn-icons-png.flaticon.com/512/1248/1248222.png", title: "Location", description: "Check location" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Video_Camera_Icon.svg/2048px-Video_Camera_Icon.svg.png", title: "Camera", description: "Coming soon" },
]

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Row gutter={[6, 24]} justify="center" align="middle" style={{ marginTop: 30 }}>
          {cards.map((card, i) => (
            <OptionCard key={i} url={card.url} title={card.title} description={card.description} />
          ))}
        </Row>
      </MainLayout>
    </div>
  );
}

export default App;
