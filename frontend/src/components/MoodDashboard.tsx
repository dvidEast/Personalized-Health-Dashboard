"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { date: '2025-05-01', moodScore: 4 },
    { date: '2025-05-02', moodScore: 3 },
    { date: '2025-05-03', moodScore: 2 },
    { date: '2025-05-04', moodScore: 5 },
];

export default function MoodDashboard() {
    return (
        <div>
        <h2 className="text-xl font-semibold mb-4">Mood Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[1, 5]} />
            <Tooltip />
            <Line type="monotone" dataKey="moodScore" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
}
