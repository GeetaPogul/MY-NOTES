import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {useNote}from "../../contexts/NoteContext";
import {useAuth} from "../../contexts/AuthContext";
import {MasonryLayout} from "../../Components/exportComponent";

const TrashPage = () => {

  const {
    auth : {authToken},
   } = useAuth();
   
   const {noteList, deleteNoteHandler, updateNoteHandler} = useNote();

  return (
    <div>

      <div className="wrapper">
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="sidebar-content">
          <div className="trash-page" >
          <h3>Trash Page</h3> <br/>
          <MasonryLayout>
            {noteList.length <1 ? (
              <p> Empty Trash</p>
            ) : (
              noteList.map((note, i) => {
                const {noteColor, noteDesc, tags, noteTitle, _id} = note;

                return(
                  note.noteInTrash && (
                    <div key={i} className={`note ${noteColor}`}>
                      <p> {noteTitle}</p>
                      <div className="note-card-desc" dangerouslySetInnerHTML={{__html : noteDesc}} />


                      {tags.length > 0 && (
                        <div className="label-render-div">
                          {tags.map((tag, i) => {
                            return(
                              <div key={i} className="label">
                                <span className="label-content">{tag}</span>
                                 </div>
                            );
                          })}
                           </div>
                      ) }

                      <div className="toolbar-tools">
                        <span className="material-icons archive-note"
                        onClick={ ()=> updateNoteHandler(_id,
                          {...note, noteInTrash : false},
                          authToken
                          )
                        }
                        > restore_from_trash</span>
                         

                         <span className="material-icons-outlined delete-note"
                         onClick={ ()=> deleteNoteHandler(_id, authToken)}
                         >
                           delete_outline

                         </span>
                      </div>
                    </div>
                  )
                )
              })
            )}
          </MasonryLayout>
             </div>
        
        
        
        </div>
      </div>
      
      
    </div>
  );
};

export default TrashPage;
