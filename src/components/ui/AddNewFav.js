import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFav = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(uiOpenModal());
  };
  return (
    <button onClick={handleOpenModal} className="btn btn-primary fab">
      <i className="fas fa-plus"></i>
    </button>
  );
};
