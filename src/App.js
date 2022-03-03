import "./App.css";
import "bulma/css/bulma.min.css";
import Body from "./components/body";
import NavBar from "./components/navbar";
function App() {
  return (
    <>
      <NavBar />
      <div className="margin-3"></div>
      <div className="container is-max-desktop is-dark">
        <Body></Body>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Sherlock</strong> by  <a href="github.com/Acalderwood93">Andrew Calderwood </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
