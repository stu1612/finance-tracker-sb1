// npm
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuthContext from "./useAuthContext";

export default function useSignup() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  async function signup(email, password, displayName) {
    setError(null);
    setLoading(true);

    try {
      // register new user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name
      await updateProfile(auth.currentUser, { displayName });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: auth.currentUser });
      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err) {
      if (!isCancelled) {
        console.error(err.message);
        setError(err.message);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, loading };
}
