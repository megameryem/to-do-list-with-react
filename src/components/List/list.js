

function List({ contacts, setContacts, }) {








    return (

        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={() => {
                setContacts(

                    contacts.map((item) => {
                        const isCompleted = contacts.some((element) => {
                            return element.completed === false
                        })
                        return isCompleted === true
                            ? { ...item, completed: true }
                            : { ...item, completed: false }
                    })
                )
            }}>
                Mark all as complete
            </label>

            <ul className="todo-list">
                {contacts.map((contact, i) => (
                    <li key={i} className={contact.completed ? "completed" : ''} >
                        <div className="view">
                            <input
                                type="checkbox"
                                className="toggle"
                                checked={contact.completed}
                                onChange={() => {
                                    setContacts(
                                        contacts.map((item) => {
                                            return item === contact
                                                ? { ...item, completed: !item.completed }
                                                : item;
                                        })
                                    );
                                }}
                            />
                            
                            <label>{contact.new_todo}</label>
                            <button className="destroy" onClick={() => {
                                setContacts(contacts.filter((item) => item !== contact))
                            }} ></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section >



    )
    
}

export default List
