import { useCase } from "../../hooks/useCase";
import { useParams } from "react-router-dom";

const CaseNotes = () => {
  const { setCaseProperty, getCasePropety } = useCase();
  const params = useParams();

  return (
    <section className="section">
      <h1 className="title">Notes</h1>
      <textarea
        onChange={(event) =>
          setCaseProperty(
            parseInt(params.caseNumber),
            "notes",
            event.target.value
          )
        }
        rows="10"
        className="textarea"
        placeholder="Notes go here"
        value={getCasePropety(parseInt(params.caseNumber), "notes")}
      />
    </section>
  );
};

export { CaseNotes };
