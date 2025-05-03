import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/Department";

function App() {
  const departments = [
    {
      name: "Computer Engineering",
      students: [
        { roll: 1, name: "Mohan", year: "SE" },
        { roll: 2, name: "Fatima", year: "TE" },
      ],
    },
    {
      name: "E&TC Engineering",
      students: [
        { roll: 3, name: "Rahul", year: "BE" },
        { roll: 4, name: "Namrata", year: "SE" },
      ],
    },
    {
      name: "Mechanical Engineering",
      students: [
        { roll: 5, name: "Suresh", year: "FE" },
        { roll: 6, name: "Ramesh", year: "TE" },
      ],
    },
    {
      name: "Social Science",
      students: [
        { roll: 7, name: "Neha", year: "SE" },
        { roll: 8, name: "Vikram", year: "BE" },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {departments.map((dept, index) => (
          <Department
            key={index}
            deptName={dept.name}
         students={dept.students}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
