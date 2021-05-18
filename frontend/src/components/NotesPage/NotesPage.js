import {useState} from "react";

const NotesPage = (props) => {
    let newNote = {
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

        updateNotesList(notesList => [...notesList, {
            id: id,
            content: note.content,
            date: Date.now(),
            status: "OPEN"
        }]);
    };

    const handleRemove = (id, event) => {
        notesList[id].status = "CLOSED";

        updateNotesList(notesList => [...notesList])
    }

    const NotesList = () => {
        if (!notesList || notesList.length === 0) {
            return <div>No Notes?</div>
        }

        return notesList.filter(note => note.status === "OPEN")
            .map(note => {
                return (
                    <div key={note.id}>
                        <button
                            className=""
                            onClick={(event) => handleRemove(note.id, event)}
                        >
                            Remove
                        </button>
                        <p>
                            {note.content}
                        </p>
                        <a href={note.id} className="">
                            {note.date}
                        </a>
                    </div>
                );
            });
    }

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
            <div>
                <NotesList/>
            </div>
        </div>
    );
};

export default NotesPage