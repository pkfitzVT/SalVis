import React from 'react';

function SalaryForm({ salary, raise, onSalaryChange, onRaiseChange }) {
    return (
        <div className="form-section">
            <h2>Salary Projection Tool</h2>
            <form>
                <label>
                    Starting Salary: $
                    <input
                        type="number"
                        value={salary}
                        onChange={onSalaryChange}
                        style={{ margin: '0 10px' }}
                    />
                </label>

                <label>
                    Annual Raise (%):
                    <input
                        type="number"
                        value={raise}
                        onChange={onRaiseChange}
                        step="0.1"
                        style={{ margin: '0 10px' }}
                    />
                </label>
            </form>
        </div>
    );
}

export default SalaryForm;
