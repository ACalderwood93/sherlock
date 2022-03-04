import ClueCard from "../ClueCard/ClueCard";

import { useState } from "react";

const Clues = ({ clues }) => {
  return (
    <section className="section">
      <div className="columns is-flex-direction-row is-flex-wrap-wrap">
        <ClueCard title="Chemist" text={clues.chemist.text} />
        <ClueCard title="Bank" text={clues.bank.text} />
        <ClueCard title="Carriage Depot" text={clues.carriageDepot.text} />
        <ClueCard title="Docks" text={clues.docks.text} />
        <ClueCard title="Hotel" text={clues.hotel.text} />
        <ClueCard title="Locksmith" text={clues.locksmith.text} />
        <ClueCard title="Museum" text={clues.museum.text} />
        <ClueCard title="Newsagents" text={clues.newsagents.text} />
        <ClueCard title="Park" text={clues.park.text} />
        <ClueCard title="Pawnbroker" text={clues.pawnbroker.text} />
        <ClueCard title="Theatre" text={clues.theatre.text} />
        <ClueCard title="Boar's Head" text={clues.boarsHead.text} />
        <ClueCard title="Scotland Yard" text={clues.scotlandYard.text} />
        <ClueCard title="Tobacconist" text={clues.tobacconist.text} />
      </div>
    </section>
  );
};

export default Clues;
