import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import EditNote from './EditNote';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    let navigate = useNavigate();

    // Loading state to handle the initial token check
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate("/login");
        }
        setLoading(false); // Set loading to false after checking token
    }, [navigate, getNotes]);

    const [currentNote, setCurrentNote] = useState({ id: "", editedtitle: "", editeddescription: "", editedtag: "" });

    const ref = useRef(null);

    const updateNote = (note) => {
        setCurrentNote({ id: note._id, editedtitle: note.title, editeddescription: note.description, editedtag: note.tag });
        ref.current.click();
        props.showAlert("Updated Successfully", "success");
    };

    // Display a loading message while checking token
    if (loading) {
            return <Spinner />
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <EditNote ref={ref} note={currentNote} setNote={setCurrentNote} showAlert={props.showAlert} />
            <div className="container">
                <div className="row my-3">
                    <h2>Your Notes</h2>
                    <div className="container mx-2">
                        {notes.length === 0 && 'No notes to display'}
                    </div>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Notes;
