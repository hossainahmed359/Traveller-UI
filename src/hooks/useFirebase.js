import initializeAuthentication from "../components/Login/Firebase/firebaseAuth";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


// Initializing Firebase First
initializeAuthentication();

const useFirebase = () => {

    // States
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [userName, setUserName] = useState(null);


    // Auth
    const auth = getAuth();


    // Provider
    const googleProvider = new GoogleAuthProvider();


    // Google Sign In
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    };


    // Registration with email and password
    const handleEmailRegistraion = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // Sign In with Email and Password
    const handleEmailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Sign Out
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
        });
    }

    // Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    return {
        user,
        setUser,
        error,
        setError,
        handleGoogleSignIn,
        handleEmailRegistraion,
        handleEmailSignIn,
        handleSignOut
    }
}

export default useFirebase;