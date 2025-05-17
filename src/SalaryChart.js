import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

function SalaryChart({ projectionData }) {
    return (
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
    );
}

export default SalaryChart;
