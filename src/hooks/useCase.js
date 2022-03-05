/* eslint-disable no-useless-computed-key */
import { casesAtom } from "../state/atoms/CaseAtom";
import { useAtom } from "jotai";

const useCase = () => {
  const [cases, setCases] = useAtom(casesAtom);
  const getCase = (caseNumber) =>
    cases.find((c) => c.caseNumber === caseNumber);

  const initCase = (caseNumber) => {
    if (getCase(caseNumber)) {
      return;
    }

    console.log("initialising new case");
    setCases([
      ...cases,
      {
        caseNumber,
        Chemist: true,
        Bank: true,
        ["Carriage Depot"]: true,
        Docks: true,
        Hotel: true,
        Locksmith: true,
        Museum: true,
        Newsagents: true,
        Park: true,
        Pawnbroker: true,
        ["Scotland Yard"]: true,
        ["Boar's Head"]: true,
        Tobacconist: true,
        notes: "",
      },
    ]);
  };

  const setCaseProperty = (caseNumber, property, value) => {
    const caseIndex = cases.findIndex((x) => x.caseNumber === caseNumber);
    if (caseIndex > -1) {
      let tmpCases = [...cases];

      tmpCases[caseIndex][property] = value; // case already exists but the property of the case does not

      setCases(tmpCases);
    }
  };

  const getCasePropety = (caseNumber, property) => {
    const savedCase = getCase(caseNumber);

    return savedCase ? savedCase[property] : undefined;
  };

  const getClueHidden = (caseNumber, property) => {
    const savedCase = getCase(caseNumber);
    if (!savedCase) {
      //console.log("Case does not exist already", property);
      return true;
    }

    return savedCase[property];
  };

  const toggleClueHidden = (caseNumber, property) => {
    console.log("toggling propety", property);
    const currentPropertyValue = getCasePropety(caseNumber, property);
    console.log("current value ", currentPropertyValue);
    setCaseProperty(caseNumber, property, !currentPropertyValue);
  };

  return {
    getCase,
    setCaseProperty,
    toggleClueHidden,
    getCasePropety,
    getClueHidden,
    initCase,
  };
};

export { useCase };
