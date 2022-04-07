import React, { useState } from "react";

interface ConfirmationPopUpProps {
  title: string;
  description: string;
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  buttonsText: {
    confirm: string;
    cancel: string;
  };
  cbFunction: () => {};
}

function ConfirmationPopUp(props: ConfirmationPopUpProps) {
  const {
    title,
    description,
    showPopUp,
    setShowPopUp,
    buttonsText,
    cbFunction,
  } = props;

  return (
    <div className={showPopUp ? "pop-up-bg" : "hidden"}>
      <div className="pop-up-wrapper">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>

        <div className="buttons-wrapper">
          <button className="cancel-btn">{buttonsText.cancel}</button>
          <button
            className="confirm-btn"
            onClick={() => {
              setShowPopUp(false);
              cbFunction();
            }}
          >
            {buttonsText.confirm}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopUp;
