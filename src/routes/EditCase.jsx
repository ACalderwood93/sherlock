import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CASE } from "../graphql/queries/cases";
import { UPDATE_CASE } from "../graphql/Mutations/cases";
import { useForm } from "react-hook-form";
const EditCase = () => {
  const { register, handleSubmit } = useForm();

  const params = useParams();
  const [updateCase, { data: mutationData, loading: mutationloading, error }] =
    useMutation(UPDATE_CASE);
  const { loading, data } = useQuery(GET_CASE, {
    variables: {
      number: parseInt(params.caseNumber),
    },
  });

  const onSubmit = async (data) => {
    await updateCase({
      variables: {
        input: data,
      },
    });
  };

  if (loading || !data) {
    return <h1>Loading...</h1>;
  }

  const clues = data?.case?.clues;
  return (
    <>
      {error && JSON.stringify(error)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section class="section ">
          <h1 class="title">Edit Case</h1>
          <h2 class="subtitle">
            Please fill in details below to edit / add a new case
          </h2>
        </section>
        <section class="section">
          <h1 class="title">Case Number</h1>
          <div class="field">
            <div className="control">
              <input
                className="input"
                defaultValue={data?.case?.number}
                readOnly={params.caseNumber !== "new"}
                type="number"
                placeholder="Case Number"
                {...register("number", {
                  valueAsNumber: true,
                })}
              />
            </div>
          </div>

          <h1 className="title">Name</h1>
          <input
            className="input"
            type="text"
            placeholder="Case Name"
            {...register("name", {
              required: true,
            })}
            defaultValue={data?.case?.name}
          ></input>
          <h1 class="title">Description</h1>
          <textarea
            className="textarea"
            rows="8"
            defaultValue={data?.case?.description}
            placeholder="Please enter the case description"
            {...register("description")}
          ></textarea>
        </section>
        <section className="section">
          <h1 className="title">Clues</h1>
          <div className="columns is-flex-direction-row is-flex-wrap-wrap">
            <div class="field column is-6 is-12-mobile">
              <label className="label">Chemist</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.chemist.number}
                  placeholder="enter number from card"
                  {...register("clues.chemist", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Bank</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.bank.number}
                  placeholder="enter number from card"
                  {...register("clues.bank", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Carriage Depot</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.carriageDepot.number}
                  placeholder="enter number from card"
                  {...register("clues.carriageDepot", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Docks</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.docks.number}
                  placeholder="enter number from card"
                  {...register("clues.docks", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Hotel</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.hotel.number}
                  placeholder="enter number from card"
                  {...register("clues.hotel", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Locksmith</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.locksmith.number}
                  placeholder="enter number from card"
                  {...register("clues.locksmith", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Museum</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.museum.number}
                  placeholder="enter number from card"
                  {...register("clues.museum", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Newsagents</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.newsagents.number}
                  placeholder="enter number from card"
                  {...register("clues.newsagents", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Park</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.park.number}
                  placeholder="enter number from card"
                  {...register("clues.park", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Pawnbroker</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.pawnbroker.number}
                  placeholder="enter number from card"
                  {...register("clues.pawnbroker", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Theatre</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.theatre.number}
                  placeholder="enter number from card"
                  {...register("clues.theatre", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Boar's Head</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.boarsHead.number}
                  placeholder="enter number from card"
                  {...register("clues.boarsHead", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Scotland Yard</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.scotlandYard.number}
                  placeholder="enter number from card"
                  {...register("clues.scotlandYard", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div class="field column is-6 is-12-mobile">
              <label className="label">Tobacconist</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={clues?.tobacconist.number}
                  placeholder="enter number from card"
                  {...register("clues.tobacconist", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
          </div>
          <button className="button is-primary"> Submit</button>
        </section>
      </form>
    </>
  );
};

export default EditCase;
