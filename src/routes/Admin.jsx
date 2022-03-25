import { useQuery } from "@apollo/client";
import { GET_ALL_CASES } from "../graphql/queries/cases";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  console.log('admin page loaded')
  const { loading, data } = useQuery(GET_ALL_CASES, {
    fetchPolicy: 'no-cache'
  });
  const navigate = useNavigate();
  if (loading || !data) {
    return <h1>No Cases found</h1>;
  }

  const casesByNumber = [...data.cases].sort((a, b) => {
    return a.number > b.number ? 1 : -1;
  });
  console.log("cases", data.cases);
  return (
    <>
      <button
        className="button is-primary"
        onClick={() => navigate("/admin/new")}
      >
        Add new +{" "}
      </button>
      <div className="table-container">
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Case Number</th>
              <th>Name</th>
              <th>Description</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {casesByNumber.map((c) => {
              return (
                <tr key={c.number}>
                  <td>{c.number}</td>
                  <td>{c.name}</td>
                  <td className="case-description-col">{c.description}</td>
                  <td>
                    <button
                      className="button is-primary"
                      onClick={() => navigate(`/admin/${c.number}`)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
