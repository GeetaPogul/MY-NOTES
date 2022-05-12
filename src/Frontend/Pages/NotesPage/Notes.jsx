import React from "react";
import { SingleNote } from "../../Components/SingleNote/SingleNote";
import { MasonryLayout, CreateNote } from "../../Components/exportComponent";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "../NotesPage/notes.css";
import { useNote } from "../../contexts/NoteContext";

function NotesPage() {
  const { noteList } = useNote();

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="sidebar-content">
          <h3>Notes Page</h3>

          <div className="notes-container">
            <CreateNote />

            <div className="notes-render-div">
              <h4> Pinned Notes</h4>
              <MasonryLayout>
                {noteList.map((note, i) => {
                  return (
                    note.notePinned &&
                    !note.noteInTrash && <SingleNote key={i} note={note} />
                  );
                })}
              </MasonryLayout>
            </div>

            <div className="notes-render-div">
              <h4> Other Notes</h4>
              <MasonryLayout>
                {noteList.map((note, i) => {
                  return (
                    !note.notePinned &&
                    !note.noteInTrash && <SingleNote key={i} note={note} />
                  );
                })}
              </MasonryLayout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesPage;
