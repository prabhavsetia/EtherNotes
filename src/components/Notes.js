import React, { useContext, useEffect, useRef } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import UpdateNote from './UpdateNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);
    
    const ref = useRef(null);
    
    const updateNote = (note) => {
        if (ref.current) {
            ref.current.click();
        }
    };
    
    return (
        <>
            <AddNote />
            <UpdateNote ref={ref} />
            <div className="container">
                <div className="row my-3">
                    <h2>Your Notes</h2>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Notes;
