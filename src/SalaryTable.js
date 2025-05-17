import React from 'react';

function SalaryTable({ projectionData }) {
    return (
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
    );
}

export default SalaryTable;
