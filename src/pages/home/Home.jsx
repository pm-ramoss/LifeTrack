import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">
        Hello World! <span className="inline-block animate-bounce">🌎</span>
      </h1>
      <button
      onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
