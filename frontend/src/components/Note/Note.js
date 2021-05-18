const Note = (props) => {
    return (
        <div key={props.note.id}>
            <button
                className=""
                onClick={(event) => props.onClick(props.note.id, event)}
            >
                Remove
            </button>
            <p>
                {props.note.content}
            </p>
            <a href={props.note.id} className="">
                {props.note.date}
            </a>
        </div>
    )
}

export default Note