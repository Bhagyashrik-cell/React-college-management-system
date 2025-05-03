import { useState } from "react";
import StudentList from "./StudentList";

function Department({ deptName, students }) {
  const [showStudents, setShowStudents] = useState(false);

  const toggleStudents = () => {
    setShowStudents(!showStudents);
  };

  return (
    <div
      style={{
        flex: "1 1 30%",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{ cursor: "pointer", color: "#003366" }}
        onClick={toggleStudents}
      >
        {deptName} Department
      </h2>
      {showStudents && <StudentList students={students} />}
    </div>
  );
}

export default Department;
