import { CaseForm } from "../components/caseForm/CaseForm";

const Home = () => {
  return (
    <>
      <figure class="image">
        <img className="image is-rounded" src="/logo.png" alt="logo"></img>
      </figure>

      <section className="section">
        <h1 className="title"> What is this?</h1>
        <h2 class="subtitle">
          This is a digital version of the clue book required for the{" "}
          <a target="_blank" rel="noreferrer" href="https://www.amazon.co.uk/221B-Baker-Street-Game/dp/B08PRSYZG2">
            "Sherlock holmes 221b Baker Street"
          </a> {" "}
          board game,
        </h2>

        <div className="columns card-row">
          <div className="column">
            <div class="card">
              <p class="card-header-title is-centered">Cases (WIP)</p>
              <div className="card-content">
                <p className="content">
                  We are currently working to add each of the 70+ cases with all
                  clues mapped and searchable
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div class="card">
              <p class="card-header-title is-centered">Clues</p>
              <div className="card-content">
                <p className="content">
                  We have extracted all 700+ clues from the newer (2014) version
                  of the board game
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div class="card">
              <p class="card-header-title is-centered">Solutions (WIP)</p>
              <div className="card-content">
                <p className="content">
                  {" "}
                  we aim to add as many of the case solutions into this site as
                  possible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseForm />
    </>
  );
};

export default Home;
