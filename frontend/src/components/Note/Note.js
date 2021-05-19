// import style from './Note.module.scss'

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
                <a href={note.id} className="">
                    {note.date}
                </a>
            )
        } else {
            return (
                <p>
                    {note.date}
                </p>
            )
        }
    }

    // TODO handle remove
    const ActionButton = () => {
        if (props.note) {
            return (
                <button
                    className=""
                    onClick={(event) => props.onClick(note.id, event)}
                >
                    Remove
                </button>
            )
        } else {
            return (
                <button> go back </button>
            )
        }
    }

    return (
        <div key={note.id}>
            <ActionButton/>
            <p>
                {note.content}
            </p>
            <DisplayDate/>
        </div>
    );
};

export default Note