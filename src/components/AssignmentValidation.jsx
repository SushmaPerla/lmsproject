const students = [
  { name: "Alice Smith", submitted: Math.random() < 0.5 }, // Randomly assign submission status
  { name: "Bob Johnson", submitted: Math.random() < 0.5 },
  { name: "Charlie Wilson", submitted: Math.random() < 0.5 },
  { name: "David Miller", submitted: Math.random() < 0.5 },
  { name: "Emily Garcia", submitted: Math.random() < 0.5 },
  { name: "Frank Thomas", submitted: Math.random() < 0.5 },
  { name: "Grace Hernandez", submitted: Math.random() < 0.5 },
  { name: "Henry Moore", submitted: Math.random() < 0.5 },
  { name: "Isabella Lopez", submitted: Math.random() < 0.5 },
  { name: "Jack Robinson", submitted: Math.random() < 0.5 },
  { name: "Kevin Walker", submitted: Math.random() < 0.5 },
  { name: "Lily Allen", submitted: Math.random() < 0.5 },
  { name: "Michael Brown", submitted: Math.random() < 0.5 },
  { name: "Nancy Clark", submitted: Math.random() < 0.5 },
  { name: "Oliver Davis", submitted: Math.random() < 0.5 },
  { name: "Patricia Edwards", submitted: Math.random() < 0.5 },
  { name: "Quentin Jones", submitted: Math.random() < 0.5 },
  { name: "Rachel King", submitted: Math.random() < 0.5 },
  { name: "Samuel Lewis", submitted: Math.random() < 0.5 },
  { name: "Taylor Martin", submitted: Math.random() < 0.5 },
];

const AssignmentValidation = () => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submitted Assignment</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.submitted ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentValidation;
