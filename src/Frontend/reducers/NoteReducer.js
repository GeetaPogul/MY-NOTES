const noteReducer = (state, action) => {
  switch (action.type) {
    case "NOTE-TITLE":
      return {
        ...state,
        noteTitle: action.payload,
      };
    case "NOTE-DESc":
      return {
        ...state,
        noteDesc: action.payload,
      };

    case "IS-PINNED":
      return {
        ...state,
        notePinned: !state.notePinned,
      };

    case "NOTE-COLOR":
      return {
        ...state,
        noteColor: action.payload,
      };

    case "ADD-TAG":
      if (action.payload === "" || state.tags.includes(action.payload)) {
        alert("Tag is already theree");

        return {
          ...state,
          tags: state.tags,
        };
      } else {
        return {
          ...state,
          tags: [...state.tags, action.payload],
        };
      }

    case "REMOVE-TAG":
      return {
        ...state,
        tags: [...state.tags.filter((item) => item !== action.payload)],
      };

    case "CLEAR-FIELDS":
      return {
        ...state,
        noteTitle: "",
        noteDesc: "",
        notePinned: false,
        noteColor: "default",
        tags: [],
        noteInTrash: false,
        createdAt: new Date(),
      };

    default:
      return state;
  }
};

export { noteReducer };
