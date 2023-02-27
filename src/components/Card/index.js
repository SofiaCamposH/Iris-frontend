import { Card, Col } from "antd";
const { Meta } = Card;
const OptionCard = () => (
  <Col xs={12} md={12} >
    <Card
      hoverable
      // style={{
      //   width: 240,
      // }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </Col>
);
export default OptionCard;
