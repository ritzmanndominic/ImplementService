import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import { TypeProduct } from "./Types/TypeProduct";
import { useHistory } from "react-router-dom";

function SingleProductWithBackButton(props: TypeProduct) {
  const history = useHistory();
  return (
    <Card className="card border-dark">
      <div className="card-body">
        <img src={props.imgSrc} alt="" />
        <h3>{props.name}</h3>
        <u>
          <h5>{props.price}</h5>
        </u>
        <h5 className="id">{props.id}</h5>
        <h5>{props.description}</h5>
        <Button
          className="btn btn-secondary btn-info"
          onClick={() => {
            history.push("/productPage");
          }}
        >
          Go Back
        </Button>
      </div>
    </Card>
  );
}

export default SingleProductWithBackButton;
