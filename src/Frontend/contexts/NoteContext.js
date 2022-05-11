import { createContext, useContext, useReducer, useState } from "react";

import { noteReducer } from "../reducers/NoteReducer";

import {
  addNoteToArchiveService,
  deleteFromArchiveService,
  deleteNoteService,
  restoreFromArchiveService,
  updateNoteService,
} from "../services/exportService";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const initialNote = {
    noteTitle: "",
    noteDesc: "",
    notePinned: false,
    noteColor: "default",
    tags: [],
    noteInTrash: false,
  };

  const [notesState, dispatchNotes] = useReducer(noteReducer, initialNote);

  const [noteList, setNoteList] = useState([]);

  const [archiveList, setArchiveList] = useState([]);

  // update Note Handler Function below

  const updateNoteHandler = async (id, note, authToken) => {
    const response = await updateNoteService(id, note, authToken);
    setNoteList(response);
  };

  // delete Note Handler Function below

  const deleteNoteHandler = async (id, authToken) => {
    const response = await deleteNoteService(id, authToken);

    setNoteList(response);
  };

  // add Notes to Archive fn below

  const addNoteToArchiveHandler = async (id, note, authToken) => {
    const response = await addNoteToArchiveService(id, note, authToken);
    setArchiveList(response.archives);
    setNoteList(response.notes);
  };

  // restore note from Archive

  const restoreFromArchiveHandler = async (id, authToken) => {
    const response = await deleteFromArchiveService(id, authToken);
    setNoteList(response);
  };

  // direct delete from archive

  const deleteFromArchiveHandler = async (id, authToken) => {
    const response = await deleteFromArchiveService(id, authToken);
    setArchiveList(response);
  };

  return (
    <NoteContext.Provider
      value={{
        notesState,
        dispatchNotes,
        noteList,
        setNoteList,
        archiveList,
        updateNoteHandler,
        addNoteToArchiveHandler,
        deleteNoteHandler,
        restoreFromArchiveHandler,
        deleteFromArchiveHandler,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => {
  const context = useContext(NoteContext);

  if (context === undefined) throw new Error("Error : from note context");

  return context;
};

export { useNote, NoteProvider };
