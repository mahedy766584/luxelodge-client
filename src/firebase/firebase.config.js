import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBXMXKvldKXrL0oY1ufzQqLchoG13s8smI",
    authDomain: "luxelodge-5b783.firebaseapp.com",
    projectId: "luxelodge-5b783",
    storageBucket: "luxelodge-5b783.appspot.com",
    messagingSenderId: "345722459919",
    appId: "1:345722459919:web:9c3675f9d79cf22d82907a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
