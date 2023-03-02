import { Card, Col } from "antd";
const { Meta } = Card;
const OptionCard = ({ url, title, description }) => (
  <Col xs={12} md={12} >
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={url}

        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  </Col>
);
export default OptionCard;
