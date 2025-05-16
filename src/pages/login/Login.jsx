
import { useLocation, useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordShow, setPasswordShow] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const from = location.state?.from?.pathname || "/home";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true });
    } catch (err) {
      alert("Sign in error!");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(collection(db, "users"));
      const docID = userDocRef.id;

      await setDoc(userDocRef, {
        id: docID,
        name: name,
        email: user.email,
      });

      setRegisterOpen(false);
      alert("Successfully signed up!");
    } catch (err) {
      console.error(err);
      alert("Sign up error!");
    }
  };

  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home", { replace: true });
      } else {
        return;
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <main className="w-screen h-screen overflow-hidden flex items-center justify-center bg-radial from-[#28B485] to-[#06242E]">
      <div className="relative w-full max-w-md h-[500px] overflow-hidden bg-transparent">
        {/* Login Form */}
        <form
          id="signin"
          onSubmit={handleLogin}
          className={`absolute top-0 left-0 bg-gray-400/35 backdrop-blur-md p-8 rounded-xl w-full h-full transition-transform duration-500 ease-in-out ${
            registerOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <h3 className="text-xl text-white font-semibold place-self-center mb-6">Welcome back!</h3>
          <input
            type="email"
            placeholder="✉️ Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block mb-4 w-full p-3 rounded border border-white/30 bg-white/10 text-white placeholder-white/70 outline-none"
          />
          <div
            id="passwordInput"
            className="flex flex-row items-center mb-6 w-full p-3 rounded border border-white/30 bg-white/10 text-white placeholder-white/70 outline-none"
          >
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="🔒 Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-[95%]"
            />
            {(password || password.trim() !== "") && (
              <button
                type="button"
                onClick={() => setPasswordShow((prev) => !prev)}
                className="w-fit h-fit text-xl cursor-pointer"
              >
                {passwordShow ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            )}
          </div>
          <section className="flex flex-col gap-1.5">
            <button
              type="submit"
              className="w-full border-2 border-teal-900 bg-teal-900 text-white px-4 py-3 rounded-[20px] font-semibold cursor-pointer"
            >
              Sign In
            </button>
            <div className="w-full flex items-center text-white">
              <div className="flex-grow border-t border-white/50"></div>
              <span className="mx-4 text-sm text-white/70">or</span>
              <div className="flex-grow border-t border-white/50"></div>
            </div>
            <button
              type="button"
              onClick={() => setRegisterOpen(true)}
              className="w-full text-teal-900 border-2 border-teal-900 bg-transparent px-4 py-3 rounded-[20px] font-semibold cursor-pointer"
            >
              Sign Up
            </button>
          </section>
        </form>

        {/* Signup Form */}
        <form
          id="signup"
          className={`absolute top-0 left-0 bg-gray-400/35 backdrop-blur-md p-8 rounded-xl w-full h-full transition-transform duration-500 ease-in-out ${
            registerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onSubmit={handleRegister}
        >
          <h3 className="text-xl text-white font-semibold place-self-center mb-6">Create an account</h3>
          {/* Example Inputs */}
          <input
            type="text"
            placeholder="👤 Name"
            onChange={(e) => {setName(e.target.value)}}
            className="block mb-4 w-full p-3 rounded border border-white/30 bg-white/10 text-white placeholder-white/70 outline-none"
          />
          <input
            type="email"
            placeholder="✉️ Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block mb-4 w-full p-3 rounded border border-white/30 bg-white/10 text-white placeholder-white/70 outline-none"
          />
          <div
            id="passwordInput"
            className="flex flex-row items-center mb-6 w-full p-3 rounded border border-white/30 bg-white/10 text-white placeholder-white/70 outline-none"
          >
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="🔒 Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-[95%]"
            />
            {(password || password.trim() !== "") && (
              <button
                type="button"
                onClick={() => setPasswordShow((prev) => !prev)}
                className="w-fit h-fit text-xl cursor-pointer"
              >
                {passwordShow ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            )}
          </div>
          <section className="flex flex-col gap-1.5">
            <button
              type="submit"
              className="w-full border-2 border-teal-900 bg-teal-900 text-white px-4 py-3 rounded-[20px] font-semibold cursor-pointer"
            >
              Sign Up
            </button>
            <div className="w-full flex items-center text-white">
              <div className="flex-grow border-t border-white/50"></div>
              <span className="mx-4 text-sm text-white/70">or</span>
              <div className="flex-grow border-t border-white/50"></div>
            </div>
            <button
              type="button"
              onClick={() => setRegisterOpen(false)}
              className="w-full text-teal-900 border-2 border-teal-900 bg-transparent px-4 py-3 rounded-[20px] font-semibold cursor-pointer"
            >
              Sign In
            </button>
          </section>
        </form>
      </div>
    </main>
  );
}
