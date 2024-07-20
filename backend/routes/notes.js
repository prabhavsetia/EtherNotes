const express = require('express')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// Route 1 :Get all notes for the user: GET "/api/notes/fetchallnotes". login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes)
})
// Route 2 :Add a note: POST "/api/notes/fetchallnotes". login Required
router.post('/addnote', fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'enter a valid description').isLength({ min: 5 })]
    , async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save();
            res.send(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured");
        }
    })
// Route 3 :Update a note: POST "/api/notes/updatenote". login Required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const newNote={};
            if(title){newNote.title = title};
            if(description){newNote.description = description};
            if(tag){newNote.tag = tag};

            let note = await Notes.findById(req.params.id);
            if(!note){
                return res.status(404).send("Not found");
            }
            if(note.user.toString() !== req.user.id){
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote}, {new: true})
            res.json({note});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured");
        }
    })
// Route 4 :Delete a note: DELETE "/api/notes/deletenote". login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            let note = await Notes.findById(req.params.id);
            if(!note){
                return res.status(404).send("Not found");
            }
            if(note.user.toString() !== req.user.id){
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndDelete(req.params.id)
            res.send({some: "Note Deleted Successfully"});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured");
        }
    })

module.exports = router
