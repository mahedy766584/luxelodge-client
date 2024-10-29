/* eslint-disable react/prop-types */
import {
    createContext,
    useEffect,
    useState
} from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLoginUser = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name, photo) => {
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user -------->', currentUser);
            setIsLoading(false);
        });
        return () => {
            return unsubscribe;
        };
    }, []);

    const authInfo = {
        user,
        isLoading,
        createUser,
        loginWithUser,
        googleLoginUser,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;