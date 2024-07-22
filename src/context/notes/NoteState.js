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
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MDBhN2NiM2ZjNTI1NjI1MWEwYTlkIn0sImlhdCI6MTcyMDcyNTM1M30.2aoeqkLQ4cL5sjU64F2hi-Iemu8irbTMSNzPd6Li6GI"
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
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MDBhN2NiM2ZjNTI1NjI1MWEwYTlkIn0sImlhdCI6MTcyMDcyNTM1M30.2aoeqkLQ4cL5sjU64F2hi-Iemu8irbTMSNzPd6Li6GI"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        // eslint-disable-next-line
        const json = response.json();
        //
        const note = {
            "_id": "6694c8f656ef10d8c081016c",
            "user": "66900a7c43fc5256251a0a9d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-07-15T05:00:18.273+00:00",
            "__v": 0
        };
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
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MDBhN2NiM2ZjNTI1NjI1MWEwYTlkIn0sImlhdCI6MTcyMDcyNTM1M30.2aoeqkLQ4cL5sjU64F2hi-Iemu8irbTMSNzPd6Li6GI"
            }
        });
        const json = response.json();
        console.log(json);
        console.log("Deleting the note with id: " + id);
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
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MDBhN2NiM2ZjNTI1NjI1MWEwYTlkIn0sImlhdCI6MTcyMDcyNTM1M30.2aoeqkLQ4cL5sjU64F2hi-Iemu8irbTMSNzPd6Li6GI"
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
