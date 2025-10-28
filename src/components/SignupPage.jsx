import { useState } from "react";
import soccerImg from "../assets/soccer.jpg";
import facebookImg from "../assets/Facebook.png";
import twitterImg from "../assets/Twitter.png";

//Function for SignUp Page 
export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Signup successful!\nWelcome, ${fullName}`);
  }
// 2 loyout Signup Page UI code starts here
  return (
    <div className="min-h-screen grid place-items-center bg-[#f3f4f6] p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="p-6 sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900">Hello!</h2>
            <p className="text-sm text-gray-600 mt-1">Please signup to continue</p>

            <form className="mt-6 space-y-4" autoComplete="off" onSubmit={onSubmit}>
              <input
                id="fullName"
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                id="password"
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />

              <input
                id="confirmPassword"
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
                required
              />

              <button
                type="submit"
                className="w-full h-11 rounded-lg text-white font-medium shadow bg-[#719F8E] hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Sign Up
              </button>

              <div className="text-center text-sm text-gray-500">or</div>
              <div className="text-center text-sm text-gray-500">Signup with</div>

              <div className="flex items-center justify-center gap-4">
              <button type="button" className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-90" title="Facebook"  >
              <img src={facebookImg} alt="facebook" className="h-5 w-5" />
              </button>
              <button type="button" className="h-10 w-10 rounded-full bg-sky-500 flex items-center justify-center hover:opacity-90" title="Twitter" >
              <img src={twitterImg} alt="twitter" className="h-5 w-5" />
              </button>
            </div>
            </form>
          </div>

          <div className="bg-[#719F8E] text-white flex flex-col items-center justify-center p-8">
            <img src={soccerImg} alt="Soccer ball" className="h-20 w-20 object-cover rounded-full border border-white/70 shadow mb-4" />
            <h3 className="text-2xl font-semibold">Soccer Ball</h3>
            <p className="mt-2 text-sm text-emerald-100">Already have an account?</p>
            <a href="/" className="mt-4 inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2 text-sm hover:bg-white hover:text-emerald-700 transition">
              Sign In
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
