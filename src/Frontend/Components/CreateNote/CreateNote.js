import { useState } from "react";

import { Label, Pallete, ReactQuillEditor } from "../exportComponent";

import { useNote } from "../../contexts/NoteContext";

import "./createNote.css";
import { useAuth } from "../../contexts/AuthContext";
import { addNoteService } from "../../services/exportService";

import "./createNote.css"

const CreateNote = () => {
  const {auth} = useAuth();

  const [isLabel, setIsLabel] = useState(false);

  const [isPallete, setIsPallete] = useState(false);

  const { notesState, dispatchNotes, setNoteList } = useNote();

  const { notePinned, noteColor, tags, noteTitle } = notesState;

  const [tempNote, setTempNote] = useState(notesState);

  const addNoteHandler = async (authToken) => {
    const notes = await addNoteService(authToken, {
      ...notesState,
      noteDesc: tempNote.noteDesc,
      createdAt: new Date(),
    });

    setNoteList(notes);
    dispatchNotes({ type: "CLEAR-FIELDS" });
    setTempNote("");
  };

  return (
    <>
      <div className="create-note-container">
        <section className={`note-section ${noteColor}`}>
          <ReactQuillEditor value={tempNote.noteDesc} setValue={setTempNote} />

          <input
            type="text"
            placeholder="Title"
            className="note-title"
            value={noteTitle}
            onChange={(event) => {
              dispatchNotes({
                type: "NOTE-TITLE",
                payload: event.target.value,
              });
            }}
          />

          {tags.length > 0 && (
            <div className="label-render-div">
              {tags.map((tag, index) => {
                return (
                  <div key={index} className="label">
                    <span
                      className="material-icons label-delete"
                      onClick={() => ({ type: "REMOVE-TAG", payload: tag })}
                    >
                      close
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="bottom-toolbar">
            <div className="toolbar-tools">
              <span
                className={
                  notePinned
                    ? "material-icons pin-note"
                    : "material-icons-outlined pin-note"
                }
                onClick={() => {
                  dispatchNotes({
                    type: "IS-PINNED",
                  });
                }}
              >
                push_pin
              </span>

              <Label
                dispatchNotes={dispatchNotes}
                isLabel={isLabel}
                setIsLabel={setIsLabel}
                setIsPallete={setIsPallete}
              />

              <Pallete
                dispatchNotes={dispatchNotes}
                isPallete={isPallete}
                setIsLabel={setIsLabel}
                setIsPallete={setIsPallete}
              />
            </div>

            <button
              className="ct-btn add-note"
              onClick={() => {
                addNoteHandler();
              }}
            >
              Add
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export { CreateNote };
