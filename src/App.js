import React, { useState } from 'react';
import './App.css';

import SalaryForm from './SalaryForm';
import SalaryTable from './SalaryTable';
import SalaryChart from './SalaryChart';

function App() {
  const [salary, setSalary] = useState(50000);
  const [raise, setRaise] = useState(5);

  const projectionData = Array.from({ length: 10 }, (_, i) => {
    const year = i + 1;
    const projected = salary * Math.pow(1 + raise / 100, year);
    return { year, salary: parseFloat(projected.toFixed(2)) };
  });





  const handleSalaryChange = (e) => {
    setSalary(Number(e.target.value));
  };

  const handleRaiseChange = (e) => {
    setRaise(Number(e.target.value));
  };

  return (
      <div className="app-container">
        {/* Salary and raise input form */}
        <SalaryForm
            salary={salary}
            raise={raise}
            onSalaryChange={handleSalaryChange}
            onRaiseChange={handleRaiseChange}
        />


        <SalaryTable projectionData={projectionData} />

        <SalaryChart projectionData={projectionData} />
      </div>

);
}

export default App;
