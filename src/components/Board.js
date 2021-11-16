import React from 'react'
import Note from "./Note";
import "../Board.css";

class  Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [
              {id:0, note: 'Running'},
              {id:1, note: 'Cook an apple pie'},
              {id: 2, note: 'Learn Gulp'},
              {id: 3, note: 'Listen Ivoox mp3'},
              {id: 4,  note: 'Practice english'}
            ]
        }   
    }
    
     update = (newNote, id) => {
       var notes = this.state.notes.map(
           note => (note.id !== id) ?
               note: 
               {
                   ...note,
                   note: newNote
               }
           )
       this.setState({notes});
    }
    
    remove = (id) => {
        var notes = this.state.notes.filter((note) => 
            note.id !== id) 
           this.setState({notes});     
        }
    
    eachNote = (note) => {
        return (
            <Note key={note.id} id={note.id}
                    onChange = {this.update}
                    onRemove = {this.remove}>{note.note}</Note>
        )
    }
    
    render(){
            return (
        <div className="board">
            {this.state.notes.map(this.eachNote)}
        </div>
    )
    }

}

export default Board
