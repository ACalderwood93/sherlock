import { gql } from "@apollo/client";

export const GET_CASE = gql`
  query getCase($number: Int) {
    case(number: $number) {
      name
      number
      description
      clues {
        bank {
          number
          text
        }
        boarsHead {
          number
          text
        }
        carriageDepot {
          number
          text
        }
        chemist {
          text
          number
        }
        docks {
          number
          text
        }
        hotel {
          text
          number
        }
        locksmith {
          number
          text
        }
        museum {
          number
          text
        }
        newsagents {
          number
          text
        }
        park {
          number
          text
        }
        pawnbroker {
          number
          text
        }
        scotlandYard {
          number
          text
        }
        theatre {
          number
          text
        }
        tobacconist {
          number
          text
        }
      }
    }
  }
`;

export const GET_ALL_CASES = gql`
  query getCases{
    cases {
      description
      name
      number
    }
  }
`;
