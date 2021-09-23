import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";

function landingPage() {
  return (
    <>
      <img
        className="homeImg"
        src="https://www.maclife.de/media/maclife/styles/tec_frontend_fullscreen/public/images/editors/2021_26/image-119456--4587306.jpg?itok=DvdaVBP0"
        alt=""
      />
      <h1 className="title">MacBook Pro 2021</h1>

      <Button
        href="http://localhost:3000/productPage"
        className="btn btn-home btn-lg rounded-pill btn-primary"
      >
        Buy now
      </Button>
    </>
  );
}

export default landingPage;