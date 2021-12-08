import React, { useContext } from "react";
import plusImg from "../../assets/plus.svg";
import GlobalContext from "../../context/GlobalContext";

const CreateEventButton = () => {

  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <button onClick={() => setShowEventModal(true)}>
      <img src={plusImg} alt="create_event"/>
      <span> Create</span>
    </button>
  );
}

export default CreateEventButton;
