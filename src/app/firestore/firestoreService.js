import firebase from "../config/Firestore";
import cuid from "cuid";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) {
    return undefined;
  }
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToEventsFromFirestore() {
  return db.collection("events").orderBy("date");
}

export function listenToEventFromFirestore(eventId) {
  return db.collection("events").doc(eventId);
}
export function addEventToFirestore(event) {
  return db.collection("events").add({
    ...event,
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/30.jpg",
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: "Diana",
      photoURL: "https://randomuser.me/api/portraits/women/27.jpg",
    }),
  });
}

export function updateEventInFirestor(event) {
  return db.collection("events").doc(event.id).update(event);
}
export function deleteEventInFirestor(eventId) {
  return db.collection("events").doc(eventId).delete();
}
export function cancelEventToggle(event) {
  return db.collection("events").doc(event.id).update({
    isCancelled: !event.isCancelled,
  });
}
