import React from 'react';
import '../Note.css';

function Note() {
    const editing = () => {
        alert('Editing');
        console.log('editing');
    }
    
     const deleting = () => {
        alert('Deleting');
        console.log('deleting');
    }
    
    return (
             <div className="note">
                 <p></p>
                 <span>
                     <button onClick={(e) => (editing(e))}>Edit</button>
                     <button onClick={(e) => (deleting(e))}>X</button>
                </span>
             </div>
    )
}

export default Note
