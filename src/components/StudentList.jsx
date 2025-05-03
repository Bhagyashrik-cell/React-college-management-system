function StudentList({ students }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "10px",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f0f0f0" }}>
          <th style={cellStyle}>Roll No</th>
          <th style={cellStyle}>Name</th>
          <th style={cellStyle}>Year</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td style={cellStyle}>{student.roll}</td>
            <td style={cellStyle}>{student.name}</td>
            <td style={cellStyle}>{student.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

export default StudentList;
