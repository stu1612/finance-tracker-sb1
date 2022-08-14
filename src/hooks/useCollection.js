// npm
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useReducer, useEffect, useState } from "react";
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
    case "IS_PENDING": {
      return { isPending: false, document: null, success: false, error: null };
    }
    case "ADDED_DOC": {
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    }
    case "ERROR": {
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default function useCollection(path) {
  const [response, dispatch] = useReducer(collectionReducer, initState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection path
  const ref = collection(fireStore, path);

  // only disptach if not cancelled
  function dispatchIfNotCancelled(action) {
    if (!isCancelled) {
      dispatch(action);
    }
  }

  async function addDocument(doc) {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = Timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...doc, createdAt });
      dispatchIfNotCancelled({ type: "ADDED_DOC", payload: addedDocument });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  }

  function deleteDocument(id) {}

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
}
