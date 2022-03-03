import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CaseForm = () => {
  const caseNumberInput = useRef(null);
  const navigate = useNavigate();

  const onCaseSearch = () => {
    // `current` points to the mounted text input element
    const caseNumber = caseNumberInput.current.value;

    if (parseInt(caseNumber) > 0) {
        navigate(`/case/${caseNumber}`);
    }
  };
  return (
    <section class="section">
      <div class="card">
        <div className="card-content">
          <div class="field">
            <label class="label is-large">Case Number</label>
            <div class="control">
              <input
                ref={caseNumberInput}
                class="input is-large"
                type="text"
                placeholder="Case Number"
              ></input>
            </div>
            <p class="help">
              This should be at the top of any of the Case cards
            </p>
          </div>
          <div className="field">
            <button class="button is-primary" onClick={onCaseSearch}>
              Search Case
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CaseForm };
