import style from './Note.module.scss'

//TODO this component serves two functions which are different in some ways
//  - splitting/adjusting might be required
const Note = (props) => {
    let note = {}
    if (!props.note) {
        const id = parseInt(props.location.pathname.substring(1));
        //TODO handle id type directly in url which might be not included in ids used
        if (!Number.isInteger(id)) {
            //TODO add go back button
            return <div>Note not found</div>
        }
        note = JSON.parse(window.localStorage.getItem('notesList'))[id]
    } else {
        note = props.note
    }

    const DisplayDate = () => {
        if (props.note) {
            return (
                <a href={note.id} className={style.noteDate}>
                    {note.date}
                </a>
            )
        }

        return (
            <p className={style.noteDate}>
                {note.date}
            </p>
        )
    }

    const GoBackButton = () => {
        return (
            <a href="/" className={style.goBackButton}> go back </a>
        )
    };

    const RemoveButton = () => {
        return (
            (
                // TODO handle remove
                //      As this function is passed from parent it cannot be accessed here while displaying single note
                // One way would be to include remove handler here (not in parent)
                //      although I do not like the idea of changing lists in several places as it will split usage of add/remove
                // Second way would be to extract handler to different file and not pass it at all, and split component into 2
                //      display single and display n components
                <button
                    className={style.removeButton}
                    onClick={(event) => props.onClick(note.id, event)}
                >
                    Remove
                </button>
            )
        )
    };

    return (
        <div className={style.note} key={note.id}>
            {!props.note && <GoBackButton/>}
            <div className="container">
                <p className={style.noteContent}>
                    {note.content}
                </p>
                {props.note && <RemoveButton/>}
            </div>

            <DisplayDate/>
        </div>
    );
};

export default Note