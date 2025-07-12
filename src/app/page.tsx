import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1 className="text-2xl font-semibold mb-4">My Calendar</h1>

      <p className="text-lg">This is a simple calendar application built with Next.js and FullCalendar.</p>
    </main>
  );
}
