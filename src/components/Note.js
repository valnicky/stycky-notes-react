
import React, {useState, useRef} from 'react';
import '../Note.css';

function Note() {
    const [edit, setEditing] = useState(false);
    const [del, setDeleting] = useState(false);
    const inputRef = useRef();
    
    const editing = () => {
      //  alert('Editing');
      //  console.log('editing');
        setEditing(true);
   //     console.log(edit);
    }
    
     const deleting = () => {
        setDeleting(true);
       // console.log(del);
    }
    
    const save = () => {
        var val = inputRef.current.value;
        alert('val: ' + val);
        setEditing(false);
    }

    
  const   RenderDisplay = () => {
         return (
             <div className="note">
                 <p>{}</p>
                 <span>
                     <button onClick={(e) => (editing(e))}>Edit</button>
                     <button onClick={(e) => (deleting(e))}>X</button>
                </span>
             </div>
    )
    }
    
    const RenderForm  = () => {
        return(
            <div className="note">
                <textarea ref={inputRef}></textarea>
                <button type="" onClick={save}>Save</button>
            </div>
        )
    }
    
    if(edit){
          return <RenderForm/>
      } else {
          return <RenderDisplay/>
      }
    
}

export default Note
