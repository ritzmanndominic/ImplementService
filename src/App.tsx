import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import productPage from "./ProductsPage";
import SingleProductPage from "./SingleProductPage";
import landingPage from "./LandingPage";
import { Container, Nav, Navbar } from "react-bootstrap";
import SearchProvider from "./Context/SearchContext";
import Formular from "./Formular";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <header>
          <Navbar bg="light-secondary" expand="lg">
            <Container>
              <Navbar.Brand href="/"></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Create">Create</Nav.Link>
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link href="/productPage">Products</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={landingPage}></Route>
            <Route exact path={"/ProductPage"} component={productPage}></Route>
            <Route exact path={"/Create"} component={Formular}></Route>
            <Route exact path={"/Login"} component={Login}></Route>
            <Route
              exact
              path={"/singleProduct/:id"}
              component={SingleProductPage}
            ></Route>
          </Switch>
        </BrowserRouter>
      </SearchProvider>
      <footer className="text-center text-white footer-link">
        <div className="text-center text-light p-4">© 2021 Copyright</div>
        <div className="text-center text-light allRightsReservedText">
          All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
