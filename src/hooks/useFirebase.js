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
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message)
            });

    };


    // Registration with email and password
    const handleEmailRegistraion = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message)
                // ..
            });
    };


    // Sign In with Email and Password
    const handleEmailSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {

                setError(error.message)
            });
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