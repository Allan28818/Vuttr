import React, { useState } from "react";
import RepoModel from "../models/RepoModel";

import "../styles/css/components/add-pop-up.css";

import iconClose from "../assets/icons/icon-close.svg";

interface AddPopUpProps {
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (props: RepoModel) => any;
}

function AddPopUp(props: AddPopUpProps) {
  const { showPopUp, setShowPopUp, handleSubmit } = props;

  const [toolName, setToolName] = useState<string>("");
  const [toolLink, setToolLink] = useState<string>("");
  const [toolDescription, setToolDescription] = useState<string>("");
  const [toolTags, setToolTags] = useState<string>("");

  return (
    <div className={showPopUp ? "pop-up-bg" : "hidden"}>
      <div className="pop-up-wrapper">
        <div className="top-content">
          <div>
            <h3 className="header-3">Add new tool</h3>
          </div>
          <div>
            <button
              className="close-button"
              onClick={() => setShowPopUp(false)}
            >
              <img src={iconClose} alt="close-modal" />
            </button>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="tool-name" className="body-smallest">
              Tool Name
            </label>
            <input
              className="default-input"
              type="text"
              name="tool-name"
              id="tool-name"
              onChange={(event) => setToolName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tool-link" className="body-smallest">
              Tool Link
            </label>
            <input
              className="default-input"
              type="url"
              name="tool-link"
              id="tool-link"
              onChange={(event) => setToolLink(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tool-description" className="body-smallest">
              Tool Description
            </label>
            <input
              className="default-input"
              type="text"
              name="tool-description"
              id="tool-description"
              onChange={(event) => setToolDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tool-tags" className="body-smallest">
              Tags
            </label>
            <input
              onChange={(event) => setToolTags(event.target.value)}
              className="default-input"
              type="text"
              name="tool-tags"
              id="tool-tags"
            />
          </div>
          <button
            className="button-primary-neutral"
            onClick={() =>
              handleSubmit({
                toolName,
                toolDescription,
                toolLink,
                toolTags: toolTags.trim().split(", "),
              })
            }
          >
            Add tool
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPopUp;
