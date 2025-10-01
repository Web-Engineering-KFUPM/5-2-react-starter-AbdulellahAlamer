import "./App.css";
import StudentCard from "./components/StudentCard";
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <StudentCard
            name="abdulellah"
            studentId="23234134"
            department="SWE"
          />
          <StudentCard name="Ahmad" studentId="35423245" department="ICS" />
          <StudentCard name="Fahd" studentId="14324325" department="ME" />
        </div>
      </main>
    </div>
  );
}

export default App;
