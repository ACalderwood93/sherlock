/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CASE } from "../../graphql/queries/cases";
import CaseDescription from "../../components/Case/CaseDescription";
import Clues from "../../components/Case/Clues";
import CaseNotes from "../../components/caseNotes";
import { useCase } from "../../hooks/useCase";
import { useEffect } from "react";

const Case = () => {
  const { initCase } = useCase();
  const params = useParams();
  const { loading, data } = useQuery(GET_CASE, {
    variables: {
      number: parseInt(params.caseNumber),
    },
  });

  useEffect(() => {
    initCase(parseInt(params.caseNumber));
  }, [initCase, params.caseNumber]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);
  if (!data.case) {
    return (
      <h1>oops, this case has not been added yet, please check back later</h1>
    );
  }

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">{data.case.name}</p>
          <p className="subtitle"></p>
        </div>
      </section>
      <CaseDescription description={data.case.description} />
      <section className="section">
        <h1 className="title">The game is afoot</h1>
        <h2 className="subtitle">
          Below are each of the locations in the board game, as you visit them
          you can reveal their clues.
        </h2>
      </section>
      <CaseNotes />

      <Clues clues={data.case.clues} />
    </>
  );
};

export { Case };
