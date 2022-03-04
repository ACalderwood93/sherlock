import { useState } from "react";

const ClueCard = ({ title, text }) => {
  const [hidden, setHidden] = useState(false);
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
            { hidden && <p>{text}</p>}
          </div>
        </div>

        <footer class="card-footer clue-card-footer">
          <button
            style={{ padding: "0.5em" }}
            class={`button ${hidden ? "is-success" : "is-danger"}`}
            onClick={() => setHidden(!hidden)}
          >
            {`${hidden ? "Hide" : "Reveal"}`}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ClueCard;
