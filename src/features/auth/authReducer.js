import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";

const initialState = {
  auth: true,
  currUser: {
    email: "bob@test.com",
    photoURL: "/assets/user.png",
  },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        auth: true,
        currUser: {
          email: payload.email,
          photoURL: payload.photoURL,
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        auth: false,
        currUser: null,
      };
    default:
      return state;
  }
}
