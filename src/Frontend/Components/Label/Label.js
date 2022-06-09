import { useState } from "react";
import "./label.css";

const Label = ({
  isLabel,
  setIsLabel,
  setIsPallete,
  dispatchNotes,
  setUpdatedNote,
  isModal,
}) => {
  const [tag, setTag] = useState("");

  const updatedNoteTags = (tag) => {
    if (isModal) {
      setUpdatedNote((updatedNote) => ({
        ...updatedNote,
        tags: [...updatedNote.tags, tag],
      }));
    } else {
      dispatchNotes({ type: "ADD-TAG", payload: tag });
    }

    setTag("");
  };

  return (
    <>
      <div className="toolbar-label-container">
        <span
          className="material-icons-outlined show-label"
          onClick={() => {
            setIsLabel(!isLabel);
            setIsPallete(false);
          }}
        >
          label
        </span>

        <div className={isLabel ? "label-div" : "label-div label-hide"}>
          <p> Label Note</p>
          <div className="label-box">
            <input
              type="text"
              className="label-input"
              placeholder="Enter Label name"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
            />

            <span
              className="material-icons add-label"
              onClick={() => {
                updatedNoteTags(tag);
              }}
            >
              add
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Label };
