export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 space-y-8 bg-gradient-to-br from-green-100 via-teal-50 to-cyan-100">
      
      {/* Navigation Link */}
      <a 
        href="/" 
        className="text-teal-700 font-semibold underline hover:text-teal-900"
      >
        ⬅ Go to Home
      </a>

      {/* Coaching Section */}
      <section className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 space-y-6 border border-teal-200">
        <h1 className="text-3xl font-extrabold text-teal-800 text-center">
          🎯 Coaching
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Welcome to the <span className="font-semibold text-teal-700">Coaching Section</span>.  
          Here you can explore resources, tips, and guidance to improve your skills and stay motivated on your journey.
        </p>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-gradient-to-r from-green-200 via-teal-200 to-cyan-200 shadow-md">
            <h2 className="font-bold text-lg text-teal-900">📘 Learning Resources</h2>
            <p className="text-gray-700">
              Access guides, tutorials, and practice exercises to grow step by step.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 shadow-md">
            <h2 className="font-bold text-lg text-red-900">🔥 Motivation & Mindset</h2>
            <p className="text-gray-700">
              Stay consistent, build focus, and develop the right mindset for success.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
