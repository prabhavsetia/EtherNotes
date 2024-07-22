import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-3'>
            <h1>Add a note</h1>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title"  name="title" value={note.title} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3" value={note.description} onChange={onChange}minLength={5} required ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" value={note.tag}  name="tag" onChange={onChange} />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form >
        </div>
    )
}

export default AddNote
