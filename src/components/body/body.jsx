import "./body.css";
import CaseForm from "../caseForm";

const Body = () => {
  return (
    <>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Sherlock</p>
          <p class="subtitle">
            This is a website designed to replace the need for the clues book
            with the "Sherlock Holmes 221b Baker street" board game
          </p>
        </div>
      </section>
      <CaseForm/>

    </>
  );
};

export { Body };
