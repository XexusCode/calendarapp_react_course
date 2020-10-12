import moment from "moment";
import { types } from "../types/types";
// {
//   id: new Date().getTime(),
//   title: "Cumpleaños novia",
//   start: moment().toDate(),
//   end: moment().add(2, "hours").toDate(),
//   bgcolor: "#77777",
//   notes: "Comprar el regalo",
//   user: {
//     _id: "123",
//     name: "Jesus",
//   },
// },
const initialState = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
      };
    case types.eventsLoaded:
      return {
        ...state,
        events: [...action.payload],
      };
    default:
      return state;
  }
};