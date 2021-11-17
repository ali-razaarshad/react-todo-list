const ToDoList = (props) => {
    return (
        <>
            <li key={props.index}>
                {props.item}
                <button className="remove-button" title="Delete"
                        onClick={() => {
                            props.deleteItem(props.index)
                        }}>x
                </button>
            </li>
        </>
    );
}

export default ToDoList;