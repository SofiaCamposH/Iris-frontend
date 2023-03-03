import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const OptionCard = ({ logo, title, description, url }) => (
  <Link to={url}>
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={logo}
          style={{
            height: "100px",
            width: "120px",
            margin: "auto",
            marginTop: "15px",
          }}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  </Link>
);
export default OptionCard;
