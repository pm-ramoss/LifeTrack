import { getAuth, signOut } from "firebase/auth";
import { db } from "../../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", user.email));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setUserName(docData.name || "Usuário sem nome");
        } else {
          console.log("No user found with ", user.email);
        }
      });

      return () => unsubscribe();
    } else {
      console.log("No user logged.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">
        Hello, {userName}! <span className="inline-block animate-bounce">🌎</span>
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
