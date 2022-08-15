// npm
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useReducer } from "react";
import { fireStore } from "../firebase/firebase";
// import { serverTimestamp } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

let initState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

function collectionReducer(state, action) {
  switch (action.type) {
    case "IS_PENDING":
      return { success: false, isLoading: true, error: null, document: null };
    case "ERROR":
      return {
        success: false,
        isLoading: false,
        error: action.payload,
        document: null,
      };
    case "ADDED_DOCUMENT":
      return {
        success: true,
        isLoading: false,
        error: null,
        document: action.payload,
      };

    default:
      return state;
  }
}

export default function useFirebase(path) {
  const [response, dispatch] = useReducer(collectionReducer, initState);

  // collection path
  const ref = collection(fireStore, path);

  async function addDocument(doc) {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = Timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...doc, createdAt });
      dispatch({ type: "ADDED_DOCUMENT", payload: addedDocument });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
      console.log(err.message);
    }
  }

  // function deleteDocument(id) {}

  return { addDocument, response };
}
