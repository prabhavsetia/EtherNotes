import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const tempNotes = [
        {
            "_id": "669165b04188dd58cdc1eba2",
            "user": "66900a7cb3fc5256251a0a9d",
            "title": "qweqwerqwereqwrwe",
            "description": "qwerwerqwerqwerw a note",
            "tag": "prsnl",
            "date": "2024-07-12T17:19:44.429Z",
            "__v": 0
        },
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
        }
    ]
    const [notes , setNotes]=useState(tempNotes)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
