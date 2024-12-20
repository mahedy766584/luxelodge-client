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
    updateEmail,
    updateProfile
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const axiosPublic = useAxiosPublic();
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

    const updateRecoverProfile = async (displayName, photoURL, email) => {
        try {

            if (photoURL.length > 500) {
                return toast.error('The photo URL is too long. Please use a shorter URL.')
            }

            updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL,
            });

            if (email && email !== auth.currentUser.email) {
                await updateEmail(auth.currentUser, email);
            }

            return { success: true };

        } catch (err) {
            console.error("প্রোফাইল আপডেট করতে সমস্যা হচ্ছে:", err);
            return { success: false, err };
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                const emailInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', emailInfo)
                    .then(res => {
                        if (res.data?.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setIsLoading(false)
                        }
                    })

            } else {
                localStorage.removeItem('access-token')
                setIsLoading(false);
            }

            console.log('current user -------->', currentUser);
        });
        return () => {
            return unsubscribe;
        };
    }, [axiosPublic]);

    const authInfo = {
        user,
        isLoading,
        createUser,
        loginWithUser,
        googleLoginUser,
        logOut,
        updateUserProfile,
        updateRecoverProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;