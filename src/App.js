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
  );
}

export default App;
