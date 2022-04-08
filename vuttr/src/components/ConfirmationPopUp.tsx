import React, { useState } from "react";

import "../styles/css/components/confirmation-pop-up.css";

interface ConfirmationPopUpProps {
  title: string;
  description: string;
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  buttonsText: {
    confirm: string;
    cancel?: string;
  };
  cbFunction?: () => void;
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
        <h1 className="header-2">{title}</h1>
        <p className="body-small">{description}</p>

        <div className="buttons-wrapper">
          {buttonsText.cancel && (
            <button
              className="button-primary-danger"
              onClick={() => {
                setShowPopUp(false);
              }}
            >
              {buttonsText.cancel}
            </button>
          )}
          <button
            className="button-primary-neutral"
            onClick={() => {
              setShowPopUp(false);
              if (!!cbFunction) {
                cbFunction();
              }
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
