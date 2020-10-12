import React from "react";
import { useDispatch } from "react-redux";
import { eventStartDelete } from "../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(eventStartDelete());
  };

  return (
    <button onClick={handleDeleteEvent} className="btn btn-danger fab-danger">
      <i className="fas fa-trash">Borrar Elemento</i>
    </button>
  );
};
