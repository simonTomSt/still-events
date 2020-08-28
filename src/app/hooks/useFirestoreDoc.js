import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinish,
} from "../asunc/asyncReducer";
import { dataFromSnapshot } from "../firestore/firestoreService";

export default function useFirestoreDoc({ query, deps, shouldExecute = true }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!shouldExecute) return;
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        if (!snapshot.exists) {
          dispatch(
            asyncActionError({
              code: "not-found",
              message: "Could not found document",
            })
          );
          return;
        }
        dataFromSnapshot(snapshot);
        dispatch(asyncActionFinish());
      },
      (error) => dispatch(asyncActionError())
    );
    return () => {
      unsubscribe();
    };
  }, deps); //eslint-disable-line react-hooks/exhaustive-deps
}
