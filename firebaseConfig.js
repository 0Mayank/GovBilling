import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCc_J3FchniSd8rZl7jm-K2_qTKVFG1cwg",
  authDomain: "gov-billing.firebaseapp.com",
  projectId: "gov-billing",
  storageBucket: "gov-billing.appspot.com",
  messagingSenderId: "1082426233424",
  appId: "1:1082426233424:web:464b0cbd7cdfcc815ff755",
  measurementId: "G-KTM94TR01F",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
