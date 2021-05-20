import style from './Note.module.scss'

const Note = (props) => {
    return (
        <div className={style.note} key={props.note.id}>
            <div className="container-row">
                <p className={style.noteContent}>
                    {props.note.content}
                </p>
                <button
                    className={style.removeButton}
                    onClick={(event) => props.onClick(props.note.id, event)}
                >
                    Remove
                </button>
            </div>

            <a href={props.note.id} className={style.noteDate}>
                {props.note.date}
            </a>
        </div>
    );
};

export default Note