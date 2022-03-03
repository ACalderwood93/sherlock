const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Sherlock</strong> by{" "}
          <a href="github.com/Acalderwood93">Andrew Calderwood </a>.
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
      </div>
    </footer>
  );
};

export default Footer;
