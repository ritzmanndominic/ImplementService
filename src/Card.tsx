import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useHistory } from "react-router";
import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";
import { TypeProduct } from "./Types/TypeProduct";

function ProductCard(props: TypeProduct) {
  const history = useHistory();

  return (
    <Card className="card border-dark">
      <div className="card-body">
        {" "}
        <img src={props.imgSrc} alt="" />
        <h3>{props.name}</h3>
        <u>
          <h5>{props.price}</h5>
        </u>
        <h5>{props.id}</h5>
        <h5>{props.description}</h5>{" "}
        <Button
          className="btn btn-info"
          onClick={() => {
            history.push("/singleProduct/" + props.id);
          }}
        >
          Show Details
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;