import { Col, Row } from "antd";

import OptionCard from "../../components/Card";

import Heart from "../../media/heart.png";
import Movement from "../../media/movement.png";
import Location from "../../media/location.png";
import Camera from "../../media/camera.png";

const Sensors = () => {
  const cards = [
    {
      url: "heart",
      logo: Heart,
      title: "Heart Rate",
      description: "Check heart rate history",
    },
    {
      url: "movement",
      logo: Movement,
      title: "Movement",
      description: "Check movement history",
    },
    {
      url: "location",
      logo: Location,
      title: "Location",
      description: "Check location",
    },
    {
      url: "camera",
      logo: Camera,
      title: "Camera",
      description: "Coming soon",
    },
  ];

  return (
    <>
      <Row gutter={[12, 12]} style={{ padding: "0 5px" }}>
        {cards.map((card, _) => (
          <Col span={12} key={card.title}>
            <OptionCard
              logo={card.logo}
              title={card.title}
              description={card.description}
              url={card.url}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Sensors;
