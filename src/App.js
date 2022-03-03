import "./App.css";
import "bulma/css/bulma.min.css";
import NavBar from "./components/navbar";
import Container from "./components/Container";

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
