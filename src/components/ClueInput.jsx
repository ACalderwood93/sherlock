const ClueInput = ({ name, field, register, errors }) => {
  return (
    <div class="field column is-6 is-12-mobile">
      <label className="label">{name}</label>
      <div className="control">
        <input
          className={`input ${errors[field] && "is-danger"}`}
          type="number"
          placeholder="enter number from card"
          {...register(field, { required: true })}
        />
        
      </div>
    </div>
  );
};

export default ClueInput;
