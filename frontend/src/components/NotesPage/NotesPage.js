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

        //TODO add date format
        updateNotesList(notesList => [...notesList, {
            id: id,
            content: note.content,
            date: Date.now(),
            status: "OPEN"
        }]);
    };

    useEffect(() => {
        if (notesList.length > 0) {
            window.localStorage.setItem('notesList', JSON.stringify(notesList))
        }
    }, [notesList]);

    useEffect(() => {
        updateNotesList(JSON.parse(window.localStorage.getItem('notesList')));
    }, []);

    const handleRemove = (id) => {
        if (!notesList) {
            return
        }

        notesList[id].status = "CLOSED";
        updateNotesList(notesList => [...notesList]);
    };

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
        <div>
            <form className='' onSubmit={handleAddNote}>
                <input
                    type="text"
                    name="content"
                    value={note.content}
                    onChange={handleInputChange}
                    required
                />
                <button className="" type="submit">
                    Add Note
                </button>
            </form>
            <div className="">
                <NotesList/>
            </div>
        </div>
    );
};

export default NotesPage