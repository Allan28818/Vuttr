import React, { useState } from "react";

interface AddPopUpProps {
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setRepo: React.SetStateAction<object>;
}

function AddPopUp(props: AddPopUpProps) {
  const { showPopUp, setShowPopUp, setRepo } = props;

  const [toolName, setToolName] = useState<string>();
  const [toolLink, setToolLink] = useState<string>();
  const [toolDescription, setToolDescription] = useState<string>();

  return (
    <div className={showPopUp ? "pop-up-bg" : "hidden"}>
      <div className="pop-up-wrapper">
        <h3>Add new tool</h3>
        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="tool-name">Tool Name</label>
            <input
              type="text"
              name="tool-name"
              id="tool-name"
              onChange={(event) => setToolName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tool-link">Tool Link</label>
            <input
              type="url"
              name="tool-link"
              id="tool-link"
              onChange={(event) => setToolLink(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tool-description">Tool Description</label>
            <input
              type="text"
              name="tool-description"
              id="tool-description"
              onChange={(event) => setToolDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="tool-tags">
              Tags
            </label>
            <input type="text" name="tool-tags" id="tool-tags" />             
            create here a component to select a lot of text messages
            */}
          </div>
          <button className="sender-button">Add tool</button>
        </div>
      </div>
    </div>
  );
}

export default AddPopUp;
