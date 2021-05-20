import style from './SingleNote.module.scss'
// import RemoveHandler from

const SingleNote = (props) => {
    const id = parseInt(props.location.pathname.substring(1));
    const notes = JSON.parse(window.localStorage.getItem('notesList'))
    const note = notes[id]

    if (!Number.isInteger(id) || !note) {
        //TODO add go back button
        return <h1>Note not found</h1>
    }

    // TODO notify user after removing note OR go back to notes list
    const handleRemove = (id) => {
        notes[id].status = "CLOSED"
        window.localStorage.setItem('notesList', JSON.stringify(notes))
    };

    //TODO a href should be changed to button
    return (
        <div className="note-container">
            <div className={style.note} key={note.id}>
                <div className={style.actionButtons}>
                    <a href="/" className={style.goBackButton}> Go back </a>
                    <button
                        className={style.removeButton}
                        onClick={(event) => handleRemove(note.id, event)}
                    >
                        Remove
                    </button>
                </div>

                <div className="container-row">
                    <p className={style.noteContent}>
                        {note.content}
                    </p>

                </div>
                <p className={style.noteDate}>
                    {note.date}
                </p>
            </div>
        </div>
    );
};

export default SingleNote