const CaseDescription = ({ description }) => {
  return (
    <section class="section">
      <h1 class="title">Description</h1>
      <textarea className="case-description" readOnly>{description}</textarea>
      
      
    </section>
  );
};

export default CaseDescription;
