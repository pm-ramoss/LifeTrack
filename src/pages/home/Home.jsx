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
    <main className="flex flex-col h-screen bg-[#06242E] overflow-auto">
      <header className="w-full flex flex-row justify-between items-center h-[15%] bg-[#1fb181] shadow-lg shadow-[#1fb1804a] px-5">
        <p>Logo</p>
        <div className="w-fit h-fit flex flex-col items-center justify-center">
          <p className="font-bold mb-4">
            Hello, {userName}! <span className="inline-block animate-bounce">🌎</span>
          </p>
          <button
            onClick={handleLogout}
            className="text-[#06242e] px-6 py-2 rounded-lg border-4 border-[#06242e] bg-transparent shadow cursor-pointer font-bold"
          >
            Logout
          </button>
        </div>
      </header>
      
    </main>
  );
}
