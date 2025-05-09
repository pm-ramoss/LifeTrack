# 🧠 LifeTrack

**LifeTrack** is your all-in-one personal life organizer. It helps you take control of your daily routines with modules for:

- 💰 Financial management  
- 🍎 Daily meal and calorie tracking  
- 🏋️ Workout planning

Built with React + Vite, styled using Tailwind CSS v4.1, powered by Firebase.

---

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4.1](https://tailwindcss.com/docs/installation)
- [Firebase (Auth + Firestore)](https://firebase.google.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [React Router](https://reactrouter.com/)
- [Vercel](https://vercel.com/)

---

## 📦 Installation Guide

> Make sure you have **Node.js 18+** and **npm** installed.

```bash
git clone https://github.com/seu-usuario/LifeTrack.git
cd LifeTrack
npm install
```

---

## 🔐 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** (with Email/Password)
4. Enable **Firestore Database**
5. Copy your Firebase config

Then, in your project folder, create:

#### 📄 `src/firebase.js` (⚠️ DO NOT SHARE THIS)

```js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_BUCKET',
  messagingSenderId: 'YOUR_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

## 📂 .gitignore (important!)

Add this line to your `.gitignore`:

```gitignore
src/firebase.js
```

---

## ☁️ Deploy on Vercel

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com/)
3. Import your GitHub project
4. Set the **build command**: `npm run build`
5. Set the **output directory**: `dist`
6. Add your Firebase credentials as **environment variables** (or manually upload your `firebase.js` later)

---

## 📜 License

This project is licensed under the **Personal Use Only License**:

- ✅ You may **use** and **modify** this project for personal, educational, and non-commercial purposes
- ❌ You may **not** sell, distribute, or use this project in commercial applications

> Want to collaborate or use it commercially? Please contact me first.

---

## 📸 Screenshots

_Add screenshots of your UI here in the future_

---

## 🙌 Contributions

Pull requests are welcome for bug fixes, suggestions, and improvements.

---

## 📬 Contact

by [@pm-ramoss](https://github.com/pm-ramoss)
