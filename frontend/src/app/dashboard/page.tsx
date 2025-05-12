import MoodEntryForm from "@/components/MoodEntryForm";
import MoodDashboard from "@/components/MoodDashboard";

export default function Dashboard() {
    return (
        <main className="p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-semibold mb-6">Mood Dashboard</h1>
        <MoodEntryForm />
        <MoodDashboard />
        </main>
    );
}
