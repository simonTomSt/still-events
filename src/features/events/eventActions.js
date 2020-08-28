import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from "./eventConstants";
import {
  asyncActionStart,
  asyncActionError,
} from "../../app/asunc/asyncReducer";
import { fetchSampleData } from "../../app/api/mockApi";

export const loadEvents = () => {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENTS, payload: events });
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};

export const listenToEvents = (events) => {
  return {
    type: FETCH_EVENTS,
    payload: events,
  };
};
export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};
export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};
export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};
