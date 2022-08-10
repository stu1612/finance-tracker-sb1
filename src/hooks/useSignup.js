// npm
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";

export default function useSignup() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function createUser(email, password, displayName) {
    setError(null);
    setLoading(true);

    try {
      // register new user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name
      // await res.user.updateProfile({ displayName });
      await updateProfile(auth.currentUser, { displayName });
      setError(null);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setLoading(false);
    }
  }
  return { error, loading, createUser };
}
