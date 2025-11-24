import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <main className="container mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-8 text-center text-5xl font-bold text-center bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
        Reiki Healing Sessions
      </h1>
      <div className="rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur">
        <BookingForm />
      </div>
    </main>
  );
}
