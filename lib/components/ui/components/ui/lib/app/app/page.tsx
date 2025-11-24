import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-6">
          Reiki Healing
        </h1>
        <p className="text-xl text-purple-800">
          Restore balance · Release stress · Awaken your energy
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12">
        <BookingForm />
      </div>
    </main>
  );
}
