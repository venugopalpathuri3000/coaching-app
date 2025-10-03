export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 space-y-8">
      <a href="/" className="text-indigo-700 font-semibold underline hover:text-indigo-900">
        ⬅ Go to Home
      </a>

      <section className="w-full max-w-md bg-white/90 shadow-xl rounded-2xl p-8 space-y-6 text-center">
        <h1 className="text-3xl font-extrabold text-indigo-800">👤 Profile</h1>

        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 shadow-md flex items-center justify-center text-4xl text-white font-bold">
            V
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-lg font-semibold text-gray-800">Venugopal Pathuri</p>
          <p className="text-gray-600">ReactJS Developer | 5 Years Experience</p>
          <p className="text-gray-600">Hyderabad, India</p>
        </div>

        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
            Edit Profile
          </button>
          <button className="px-5 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition">
            Logout
          </button>
        </div>
      </section>
    </main>
  );
}
