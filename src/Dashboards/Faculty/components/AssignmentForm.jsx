const AssignmentForm = () => {
  return (
    <div className="assignment-section">
      <h2>Assignments</h2>
      <form>
        <label htmlFor="assignmentDetails">Assignment Details:</label>
        <br />
        <textarea
          id="assignmentDetails"
          name="assignmentDetails"
          rows="10"
          cols="80"
        ></textarea>
        <br />
        <br />
        <button type="submit">Submit Assignment</button>
      </form>
    </div>
  );
};

export default AssignmentForm;
