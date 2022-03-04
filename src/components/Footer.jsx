import Container from "./Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="content has-text-centered">
          <p>
            <strong>Sherlock</strong> by{" "}
            <a href="https://github.com/Acalderwood93">Andrew Calderwood </a>.
          </p>
          <p>
            <strong>
              Powered by{" "}
              <a href="https://www.apollographql.com/">Apollo GraphQL,</a>
            </strong>{" "}
            API Available{" "}
            <a href="https://api.sherlock.pandapops.me">
              <strong>here</strong>
            </a>
            .
          </p>
          <a href="https://vercel.com/">
            <img
              src="/vercel-logotype-dark.svg"
              style={{ width: "5em" }}
              alt="vercel logo"
            ></img>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
