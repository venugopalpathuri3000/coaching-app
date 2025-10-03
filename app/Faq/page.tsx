export default function FAQ() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 space-y-8 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100">
      <a href="/" className="text-indigo-600 font-semibold underline hover:text-indigo-800">
        ⬅ Go to Home
      </a>

      <section className="w-full max-w-2xl bg-white/80 shadow-lg rounded-2xl p-8 space-y-6 border border-indigo-200">
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center">🌟 FAQ</h1>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 shadow-md">
            <h2 className="font-bold text-lg text-indigo-900">Q1: What is FAQ?</h2>
            <p className="text-gray-700">FAQ means "Frequently Asked Questions" and provides quick answers.</p>
          </div>
          <div className="p-5 rounded-xl bg-gradient-to-r from-green-200 via-teal-200 to-cyan-200 shadow-md">
            <h2 className="font-bold text-lg text-teal-900">Q2: Why use FAQs?</h2>
            <p className="text-gray-700">They save time by helping users find answers quickly.</p>
          </div>
          <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 shadow-md">
            <h2 className="font-bold text-lg text-red-900">Q3: Can I add more questions?</h2>
            <p className="text-gray-700">Yes, you can add as many as you want depending on your project.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
