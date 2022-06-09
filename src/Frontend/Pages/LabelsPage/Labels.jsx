import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useReducer } from "react";
import { MasonryLayout, SingleNote } from "../../Components/exportComponent";
import "../LabelsPage/labelpage.css"
import { useNote } from "../../contexts/NoteContext";


const LabelsPage = () => {
  const { noteList } = useNote();

  const newLabels = noteList.reduce((acc, curr) => {
    return [...acc, ...curr.tags];
  }, []);

  const uniqueTags = [...new Set(newLabels)];

  function reduceTags(state, action) {
    switch (action.type) {
      case "FILTER-BY-TAG":
       return {
          ...state,
          newTags: state.newTags.includes(action.payload)
            ? state.newTags.filter((val) => val !== action.payload)
            : [...state.newTags, action.payload],
        };
      default:
        return state;
    }
  }

  const filterByTags = (newTags, noteList) => {
    if (newTags.length !== 0) {
      return noteList.filter(
        (note) => note.tags.filter((tag) => newTags.includes(tag)).length > 0
      );
    }
    return noteList;
  };

  const [state, dispatch] = useReducer(reduceTags, {
    newTags: [],
  });
  const newList = filterByTags(state.newTags, noteList);
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="sidebar-content">
          <div className="notes-container">
            <div className="notes-render-div">
              <div> 
              <h4> All Labels</h4> <br/>
              {uniqueTags.length > 0 && (
                <>
                  <p> Filter by Tags</p>
                  <ul className="filter-tags-container">
                    {uniqueTags.map((tag, index)=> (
                      <span key ={index} className="tag-btn">
                        <label htmlFor={tag}  className="label">
                          <input
                          type="checkbox"
                          id={tag}
                          value={tag}
                          checked={state.newTags.includes(tag)}
                          onChange = {()=> dispatch({type : "FILTER-BY-TAG", payload : tag})
                        }
                          />

                          {tag}
                        </label>
                      </span>
                    ))}
                  </ul>
                </>
              )}


              <MasonryLayout >

                {newList.map((note,i) => {
                  return note.tags.length > 0 &&<SingleNote key={i}
                   note={note} />
                })}
              </MasonryLayout>
            </div>
          </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default LabelsPage;
