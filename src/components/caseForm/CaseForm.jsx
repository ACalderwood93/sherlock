const CaseForm = () => {
  return (
    <section class="section">
      <div class="card">
        <div className="card-content">
          <div class="field">
            <label class="label is-large">Case Number</label>
            <div class="control">
              <input
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
            <button
              class="button is-primary"
              onClick={() => alert("submitted")}
            >
              Search Case
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CaseForm };
