import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both Email and Password.");
      return;
    }
//Checks Email and Password with you@example.com and admin@123
    const ok = email.trim() === "you@example.com" && password === "admin@123";

// Alert message 
    if (ok) {
      alert(`Login success!\nEmail: ${email}`);
    } else {
      alert("Invalid credentials.");
    }
  }
  
  //Main Login Page UI code starts here

  return (
    <div className="min-h-screen grid place-items-center bg-[#f3f4f6] p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] border border-gray-200">
        <div className="p-6 sm:p-8">
          <h1 className="text-center text-2xl font-semibold text-red-600">
            MyApp Login
          </h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" autoComplete="off">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 "
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute  top-2 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg text-white font-medium shadow bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-indigo-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
