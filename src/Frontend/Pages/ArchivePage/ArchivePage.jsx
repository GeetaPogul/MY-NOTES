import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../contexts/NoteContext";
import { useAuth } from "../../contexts/AuthContext";
import { MasonryLayout } from "../../Components/exportComponent";

const ArchivePage = () => {

  const {auth : {authToken}} = useAuth();

  const {archiveList, deleteFromArchiveHandler, restoreFromArchiveHandler} = useNote();
  return (
    <>
     <div className="wrapper">
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="sidebar-content">
        <div className="trash-page">
           <h3>Archive Page</h3> <br/>

           <MasonryLayout>
             {archiveList.length < 1 ? (
             <p> No Archive Notes</p>) : 
             (
               archiveList.map((note,i) => {
                 const{noteColor, noteDesc,tags,noteTitle, _id} = note;
                 return(
                   !note.noteInTrash && (
                   <div key={i} className={`note ${noteColor}`}>
                     <h3> {noteTitle}</h3>
                     <div className="note-card-desc" dangerouslySetInnerHTML={{__html : noteDesc}}></div>

                     {tags.length > 0 && (
                       <div className="label-render-div">
                         {tags.map((tag,i) => {
                           return(
                             <div key={i}className="label"> 
                             <span className="label-content"> {tag} </span>
                             </div>
                           );
                         })}
                       </div>
                     )}

                     <div className="toolbar-tools">
                       <span className="material-icons archive-note" 
                       onClick={ ()=> restoreFromArchiveHandler(_id, authToken)
                      }
                      >
                        unarchive
                      </span>

                      <span className="material-icons-outlined delete-note"
                      onClick={() => deleteFromArchiveHandler(_id,authToken)
                      }
                      >
                        delete_outline
                      </span>
                     </div>

                   </div>)
                 );
               })
             )}
           </MasonryLayout>
        </div>
        

        </div>
      </div>
    </>
  );
};

export default ArchivePage;
