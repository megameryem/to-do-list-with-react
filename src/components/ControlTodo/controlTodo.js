import React from 'react'

function ControlTodo({ contacts, setContacts, status, setStatus, filteredContact}) {
    const unCompleted = contacts.filter((contact) => contact.completed == false);
    const completed = filteredContact.filter((contact) => contact.completed == true);
    const clearCompleted = (e) => {
        
        e.preventDefault();
        setContacts(contacts.filter((contact) => contact.completed == false));
    };

    const clickStyle = (e) => {
        setStatus(e.target.id);
    };
    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{unCompleted.length}</strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a
                            onClick={clickStyle}
                            className={status === "all" ? "selected" : ""}
                            id="all"
                        >
                            All
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={clickStyle}
                            className={status === "active" ? "selected" : ""}
                            id="active"
                        >
                            Active
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={clickStyle}
                            className={status === "completed" ? "selected" : ""}
                            id="completed"
                        >
                            Completed
                        </a>
                    </li>
                </ul>

                <button className={completed === 0 ? "hidden" : "clear-completed"}
                    onClick={clearCompleted}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default ControlTodo
