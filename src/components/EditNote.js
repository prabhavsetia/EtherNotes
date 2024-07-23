import React, { forwardRef, useContext, useRef } from 'react';
import noteContext from '../context/notes/NoteContext';
const EditNote = forwardRef((props, ref) => {
    const context = useContext(noteContext);
    const { editNote } = context
    const { note, setNote } = props;
    const refClose = useRef(null); // Added refClose here
    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.editedtitle, note.editeddescription, note.editedtag);
        refClose.current.click();
        props.showAlert("Note Edited","success");

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className='container my-3'>
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="editedtitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="editedtitle"  name="editedtitle" value={note.editedtitle} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editeddescription" className="form-label">Description</label>
                                    <textarea className="form-control" id="editeddescription"  name="editeddescription" rows="3" value={note.editeddescription} onChange={onChange}minLength={5} required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editedtag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="editedtag"  name="editedtag" value={note.editedtag} onChange={onChange} />
                                </div>
                                <div className="modal-footer">
                                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button disabled={note.editedtitle.length<5 || note.editeddescription.length<5} refclosetype="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                                </div>
                            </form >
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
});

export default EditNote;
