import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const tempNotes = [
        {
            "_id": "6694ace2c947c2df0d6b1fc0",
            "user": "66900a7cb3fc5256251a0a9d",
            "title": "Hello",
            "description": "This is a note",
            "tag": "prsnl",
            "date": "2024-07-15T05:00:18.273Z",
            "__v": 0
        },
        {
            "_id": "6694ace9c947c2df0d6b1fc2",
            "user": "66900a7cb3fc5256251a0a9d",
            "title": "Hello how are you",
            "description": "This is a note",
            "tag": "prsnl",
            "date": "2024-07-15T05:00:25.628Z",
            "__v": 0
        },
        {
            "_id": "6694acf2c947c2df0d6b1fc4",
            "user": "66900a7cb3fc5256251a0a9d",
            "title": "This is a note",
            "description": "This is a note",
            "tag": "prsnl",
            "date": "2024-07-15T05:00:34.354Z",
            "__v": 0
        },
        {
            "_id": "6694c8c857ef10d8c0810168",
            "user": "66900a7cb3fc5256251a0a9d",
            "title": "Disk",
            "description": "This is a Disk",
            "tag": "prsnl",
            "date": "2024-07-15T06:59:20.906Z",
            "__v": 0
        },
        {
            "_id": "6694c8e557ef10d8c081016a",
            "user": "66900a7cb3fc5256251a0a9d",
            "title": "Rocket",
            "description": "This is a Rocket",
            "tag": "prsnl",
            "date": "2024-07-15T06:59:49.196Z",
            "__v": 0
        },
        {
            "_id": "6694c8f657ef10d8c081016c",
            "user": "66900a7cb3fc5256251a0a9d",
            "title": "Delete",
            "description": " delete this note",
            "tag": "prsnl",
            "date": "2024-07-15T07:00:06.231Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(tempNotes)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
