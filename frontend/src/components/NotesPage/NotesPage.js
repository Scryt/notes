import './NotesPage.modules.scss'
import {useState, useEffect} from "react";
import Note from "../Note/Note";

const NotesPage = () => {
    const newNote = {
        content: '',
        status: 'OPEN'
    };

    let [note, setNote] = useState(newNote);
    const handleInputChange = (event) => {
        event.persist();
        setNote(note => ({...note, [event.target.name]: event.target.value}));
    };

    let [notesList, updateNotesList] = useState([])
    const handleAddNote = (event) => {
        if (event) {
            event.preventDefault();
        }

        let id = 0
        if (notesList) {
            id = notesList.length;
        }

        const noteCreateDate = new Date
        updateNotesList(notesList => [...notesList, {
            id: id,
            content: note.content,
            date: noteCreateDate.toISOString().replace(/T/, ' ').replace(/\.\d{3}Z$/, ''),
            status: "OPEN"
        }]);
    };

    const handleRemove = (id) => {
        if (!notesList) {
            return
        }

        notesList[id].status = "CLOSED";
        updateNotesList(notesList => [...notesList]);
    };

    useEffect(() => {
        if (notesList !== null && notesList.length !== 0) {
            window.localStorage.setItem('notesList', JSON.stringify(notesList))
        }
    }, [notesList]);

    useEffect(() => {
        const notes = JSON.parse(window.localStorage.getItem('notesList'));
        if (notes !== null) {
            updateNotesList(notes);
        }
    }, []);

    const NotesList = () => {
        if (!notesList || notesList.length === 0) {
            return <div>No Notes :(</div>
        }

        //TODO throws warning for not unique keys, although list does not contains duplicated record
        // -- needs to be fixed
        return notesList.filter(note => note.status === "OPEN")
            .map(note => {
                return (
                    <Note note={note} onClick={handleRemove}/>
                );
            });
    };

    return (
        <div className="container-column, note-container">
            <div className="container-column">
                <form className="addNoteForm" onSubmit={handleAddNote}>
                    <textarea
                        className="noteContentInput"
                        name="content"
                        value={note.content}
                        onChange={handleInputChange}
                        required
                    />
                    <button className="" type="submit">
                        Add Note
                    </button>
                </form>
            </div>
            <div className="notes">
                <h1>Latest notes</h1>
                <NotesList/>
            </div>
        </div>
    );
};

export default NotesPage