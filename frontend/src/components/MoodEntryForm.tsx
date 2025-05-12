"use client";
import { useState } from "react";

export default function MoodEntryForm() {
    const [mood, setMood] = useState("happy");

    const submitMood = async () => {
        await fetch("/api/mood", {
        method: "POST",
        body: JSON.stringify({ mood }),
        });
        alert("Mood logged!");
    };

    return (
        <div className="mb-6">
        <select
            className="border p-2 mr-2"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
        >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="anxious">Anxious</option>
            <option value="neutral">Neutral</option>
        </select>
        <button onClick={submitMood} className="bg-blue-500 text-white px-4 py-2 rounded">
            Log Mood
        </button>
        </div>
    );
}
