import React, { useState } from 'react';
import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';




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
        <div className="form-section">
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

        {/* Table and chart in a side-by-side layout */}
        <div className="content-row">
          <div className="table-section">
            <h3>Salary Projection</h3>
            <table border="1" cellPadding="8">
              <thead>
              <tr>
                <th>Year</th>
                <th>Salary ($)</th>
              </tr>
              </thead>
              <tbody>
              {projectionData.map(({ year, salary }) => (
                  <tr key={year}>
                    <td>{year}</td>
                    <td>{salary.toLocaleString()}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

          <div className="chart-section">
            <h3>Salary Growth Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ value: 'Salary ($)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="salary" stroke="#8884d8" dot={true} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>



);
}

export default App;
