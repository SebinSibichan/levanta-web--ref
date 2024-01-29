import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeC_1XTBWtJcK5gE5ryArwYGSAUuQl3to",
  authDomain: "laventa-travels-web.firebaseapp.com",
  projectId: "laventa-travels-web",
  storageBucket: "laventa-travels-web.appspot.com",
  messagingSenderId: "587024731584",
  appId: "1:587024731584:web:58b0352868345109ec8c25"
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig;
