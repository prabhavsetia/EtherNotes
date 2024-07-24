import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const host = "http://localhost:8000";
    const tempNotes = []
    const [notes, setNotes] = useState(tempNotes)
    //Get all notes
    const getNotes = async () => {
        //TODO : API Call
        const url = '/api/notes/fetchallnotes';
        const response = await fetch(`${host}${url}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    }
    //Add a note
    const addNote = async (title, description, tag) => {
        //TODO : API Call
        const url = '/api/notes/addnote';
        const response = await fetch(`${host}${url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        // eslint-disable-next-line
        const note = await response.json();
        setNotes(notes.concat(note))
    }
    //Delete a note
    const deleteNote = async (id) => {
        //API call
        const url = '/api/notes/deletenote/';

        const response = await fetch(`${host}${url}${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        // eslint-disable-next-line
        const json = response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const url = '/api/notes/updatenote/';

        const response = await fetch(`${host}${url}${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        // eslint-disable-next-line
        const json = await response.json();
        console.log(json);
        // Logic to edit Client
        const newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
