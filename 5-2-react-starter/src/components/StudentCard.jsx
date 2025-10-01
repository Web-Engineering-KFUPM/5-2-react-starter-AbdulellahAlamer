import React from "react";

const StudentCard = ({ name, studentId, department }) => {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>ID: {studentId}</p>
      <p>Department: {department}</p>
    </div>
  );
};

export default StudentCard;
