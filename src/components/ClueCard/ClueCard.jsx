import { useParams } from "react-router-dom";
import { useCase } from "../../hooks/useCase";

const ClueCard = ({ title, text }) => {
  const params = useParams();
  const { toggleClueHidden, getClueHidden } = useCase();

  return (
    <div className="column is-6 is-full-mobile">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{title}</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>

        <div class="card-content">
          <div class="content clue-card-content">
            {!getClueHidden(parseInt(params.caseNumber), title) && (
              <p>{text}</p>
            )}
          </div>
        </div>

        <footer class="card-footer clue-card-footer">
          <button
            style={{ padding: "0.5em" }}
            class={`button ${
              !getClueHidden(parseInt(params.caseNumber), title)
                ? "is-success"
                : "is-danger"
            }`}
            onClick={() => toggleClueHidden(parseInt(params.caseNumber), title)}
          >
            {`${
              !getClueHidden(parseInt(params.caseNumber), title)
                ? "Hide"
                : "Reveal"
            }`}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ClueCard;
