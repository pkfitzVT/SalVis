import React, { useState } from 'react';
import './App.css';

function App() {
  const [salary, setSalary] = useState(50000);
  const [raise, setRaise] = useState(5);

  const handleSalaryChange = (e) => {
    setSalary(Number(e.target.value));
  };

  const handleRaiseChange = (e) => {
    setRaise(Number(e.target.value));
  };

  return (
      <>
        {/* This is the salary and raise input form */}
      <div style={{ padding: '20px' }}>
        <h2>Salary Projection Tool</h2>

        <form>
          <label>
            Starting Salary: $
            <input
                type="number"
                value={salary}
                onChange={handleSalaryChange}
                style={{ margin: '0 10px' }}
            />
          </label>

          <label>
            Annual Raise (%):
            <input
                type="number"
                value={raise}
                onChange={handleRaiseChange}
                step="0.1"
                style={{ margin: '0 10px' }}
            />
          </label>
        </form>
      </div>

        {/* This is the salary and raise table display*/}
      <div style={{ marginTop: '30px' }}>
        <h3>Salary Projection</h3>
        <table border="1" cellPadding="8">
          <thead>
          <tr>
            <th>Year</th>
            <th>Salary ($)</th>
          </tr>
          </thead>
          <tbody>
          {Array.from({ length: 10 }, (_, i) => {
            const year = i + 1;
            const projected = (salary * Math.pow(1 + raise / 100, year)).toFixed(2);
            return (
                <tr key={year}>
                  <td>{year}</td>
                  <td>{parseFloat(projected).toLocaleString()}</td>
                </tr>
            );
          })}
          </tbody>
        </table>
      </div>
</>


);
}

export default App;
